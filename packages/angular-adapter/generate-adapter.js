const path = require('path');
const glob = require('tiny-glob');
const fs = require('fs');

const getKebabCase = (name) => {
  return name
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLocaleLowerCase();
};

const readFile = (filePath) => {
  try {
    const contents = fs.readFileSync(filePath, 'utf8');
    return contents;
  } catch (err) {
    console.error(`Error reading file: ${err}`);
    return null;
  }
};

const getComponentName = (fileContent) => {
  const componentNameRegex = /export\s+interface\s+(\w+)Props?\s*\{/;
  const match = componentNameRegex.exec(fileContent);
  return match ? match[1] : null;
};

const getPropDeclarations = (fileContent) => {
  const propDeclarationRegex = /(\w+\??\s*:\s*\w+;)/g;
  const propDeclarations = [];
  let match;
  while ((match = propDeclarationRegex.exec(fileContent)) !== null) {
    propDeclarations.push(match[0]);
  }

  return propDeclarations;
};

const getComponentsData = async () => {
  let componentPaths = await glob('../components/**/*/types/index.ts');

  return componentPaths.reduce((acc, componentPath) => {
    const typesFileContent = readFile(componentPath);
    const name = getComponentName(typesFileContent);
    const propDeclarations = getPropDeclarations(typesFileContent);

    acc.push({ name, propDeclarations });
    return acc;
  }, []);
};

const getTypeExportNames = () => {
  const typesFilePath = '../types/index.ts';
  const typesFileContent = readFile(typesFilePath);
  const exportNameRegex = /^\s*export\s.+?\s+(\w+)\s*(?=\{|=)/gm;
  const exportNames = [];
  let match;
  while ((match = exportNameRegex.exec(typesFileContent)) !== null) {
    exportNames.push(match[1]);
  }

  return exportNames.join(', ');
};

const getDirectiveProps = (propDeclarations) => {
  return propDeclarations.reduce((acc, propDeclaration) => {
    const propNameRegex = /([a-zA-Z]+)\s*[:?]/;
    const match = propNameRegex.exec(propDeclaration);
    const propName = match ? match[1] : null;

    return (
      acc +
      `
  @HostBinding('attr.${propName}') @Input() ${propDeclaration}`
    );
  }, '');
};

const generateDirective = async (componentsData) => {
  const header = `import { Directive, HostBinding, Input } from '@angular/core';

import { ${getTypeExportNames()} } from '@no-gravity-elements/types';

  `;

  const content = componentsData.reduce((acc, componentData) => {
    const { name, propDeclarations } = componentData;
    const kebabCase = getKebabCase(name);
    return (
      acc +
      `
@Directive({
  selector: 'nge-${kebabCase}',
})
export class ${name}Directive {${getDirectiveProps(propDeclarations)}
}

    `
    );
  }, header);

  const filePath = path.join(
    __dirname,
    'projects/angular-adapter/src/lib/angular-adapter.directive.ts',
  );
  const dirPath = path.dirname(filePath);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  fs.writeFileSync(filePath, content);
};

const generateModule = async (componentsData) => {
  const directives = componentsData
    .map(({ name }) => {
      return `${name}Directive`;
    })
    .join(', ');

  const content = `
import { NgModule } from '@angular/core';

import { ${directives} } from './angular-adapter.directive';

@NgModule({
  declarations: [ ${directives} ],
  imports: [
  ],
  exports: [ ${directives} ]
})
export class AngularAdapterModule { }

  `;

  const filePath = path.join(
    __dirname,
    'projects/angular-adapter/src/lib/angular-adapter.module.ts',
  );
  const dirPath = path.dirname(filePath);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  fs.writeFileSync(filePath, content);
};

const generateAdapter = async () => {
  const componentsData = await getComponentsData();

  await generateDirective(componentsData);
  await generateModule(componentsData);
};

generateAdapter();
