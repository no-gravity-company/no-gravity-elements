const path = require('path');
const glob = require('tiny-glob');
const fs = require('fs');

const exportNameRegex = /^\s*export\s.+?\s+(\w+)\s*(?=\{|=)/gm;

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
    return null;
  }
};

const writeFile = (file, content) => {
  const filePath = path.join(__dirname, file);
  const pathDir = path.dirname(filePath);
  if (!fs.existsSync(pathDir)) {
    fs.mkdirSync(pathDir, { recursive: true });
  }
  fs.writeFileSync(filePath, content);
};

const getAllExports = (fileContent) => {
  const matches = fileContent?.match(exportNameRegex);
  return matches ? matches.map((match) => match.trim().split(/\s+/).pop()) : [];
};

// TODO this doesnt work with nested object props, needs to work
const getPropDeclarationsFromInterface = (interfaceContent) => {
  const declarationsRegex = /(('.*'|\w+)\??\s*:\s*.+;)/g;
  const declarations = [];
  let match;
  while ((match = declarationsRegex.exec(interfaceContent)) !== null) {
    declarations.push(match[0]);
  }

  return declarations;
};

const getPropDataFromDeclaration = (propDeclaration) => {
  const propNameRegex = /('.*'|\w+)\s*[:?]\:* (.*);/;
  const match = propNameRegex.exec(propDeclaration);

  const propName = match?.[1];
  const typing = match?.[2];

  return { propName, typing };
};

const getComponentName = (fileContent) => {
  const componentNameRegex = /\/([^\/]+)\/package.json$/;
  const match = componentNameRegex.exec(fileContent);
  return match ? match[1] : null;
};

const getPropDeclarations = (fileContent) => {
  const fullPropsInterfaceRegex = /\b\w+Props\b\s*=*\s*{\s*((?:\w+\??\s*:\s*.+;\s*)+)/g;
  const propsInterfaceMatch = fullPropsInterfaceRegex.exec(fileContent);
  const propsInterfaceContent = propsInterfaceMatch ? propsInterfaceMatch[1] : null;

  return getPropDeclarationsFromInterface(propsInterfaceContent);
};

const getEventsData = (fileContent) => {
  const eventsInterfaceRegex = /\b\w+Events\b\s*={0,1}\s*{\s*((?:'.*'+\??\s*:\s*.+;\s*)+)/gm;
  const eventsInterfaceMatch = eventsInterfaceRegex.exec(fileContent);
  const eventsInterfaceContent = eventsInterfaceMatch ? eventsInterfaceMatch[1] : null;
  const eventDeclarations = getPropDeclarationsFromInterface(eventsInterfaceContent);
  return eventDeclarations.map((eventDeclaration) => {
    const { propName, typing } = getPropDataFromDeclaration(eventDeclaration, true);
    const match = typing.match(/CustomEvent<(.+?)>/);

    return {
      propName,
      typing: match ? match[1] : null,
    };
  });
};

const filterNecessaryComponentExports = (componentTypeExports, propDeclarations, eventsData) => {
  return componentTypeExports.filter((componentExportName) => {
    if (componentExportName.includes('Props') || componentExportName.includes('Events')) {
      return false;
    }

    if (
      propDeclarations?.some((propDeclaration) => propDeclaration?.includes(componentExportName))
    ) {
      return true;
    }

    if (
      eventsData?.some((eventDeclaration) => eventDeclaration?.typing.includes(componentExportName))
    ) {
      return true;
    }

    return false;
  });
};

const getComponentsData = async () => {
  let componentPaths = await glob('../components/**/*/package.json');

  return componentPaths.map((componentPath) => {
    const name = getComponentName(componentPath);
    const typesFilePath = componentPath.replace('package.json', 'types/index.ts');
    const typesFileContent = readFile(typesFilePath);
    const propDeclarations = getPropDeclarations(typesFileContent);
    const eventsData = getEventsData(typesFileContent);
    const componentTypeExports = getAllExports(typesFileContent);
    const exports = filterNecessaryComponentExports(
      componentTypeExports,
      propDeclarations,
      eventsData,
    );

    return {
      name,
      propDeclarations,
      eventsData,
      exports,
    };
  });
};

const getTypeExportNames = () => {
  const typesFilePath = '../types/index.ts';
  const typesFileContent = readFile(typesFilePath);
  const typesFilesExports = getAllExports(typesFileContent);
  return typesFilesExports.join(', ');
};

const getComponentExportNames = (componentsData) => {
  return componentsData.reduce((acc, { name, exports }) => {
    if (!exports.length) return acc;

    return (
      acc +
      `
import { ${exports.join(', ')} } from '@no-gravity-elements/${getKebabCase(name)}'`
    );
  }, '');
};

const getDirectiveInputProps = (propDeclarations) => {
  return propDeclarations.reduce((acc, propDeclaration) => {
    const { propName } = getPropDataFromDeclaration(propDeclaration);

    return (
      acc +
      `
  @HostBinding('attr.${propName}') @Input() ${propDeclaration}`
    );
  }, '');
};

const getDirectiveEvents = (eventsData) => {
  return eventsData.reduce((acc, { propName, typing }) => {
    return (
      acc +
      `
  @Output() ${propName} = new EventEmitter<CustomEvent<${typing}>>();`
    );
  }, '');
};

const generateDirective = async (componentsData) => {
  const header = `import { Directive, EventEmitter, HostBinding, Input, Output } from '@angular/core';

import { ${getTypeExportNames()} } from '@no-gravity-elements/types';
${getComponentExportNames(componentsData)}
  `;

  const content = componentsData.reduce((acc, componentData) => {
    const { name, propDeclarations, eventsData } = componentData;
    const kebabCase = getKebabCase(name);
    return (
      acc +
      `
@Directive({
  selector: 'nge-${kebabCase}',
})
export class ${name}Directive {${getDirectiveInputProps(propDeclarations)}${getDirectiveEvents(
        eventsData,
      )}
}

    `
    );
  }, header);

  writeFile('projects/angular-adapter/src/lib/angular-adapter.directive.ts', content);
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

  writeFile('projects/angular-adapter/src/lib/angular-adapter.module.ts', content);
};

const generateAdapter = async () => {
  const componentsData = await getComponentsData();

  await generateDirective(componentsData);
  await generateModule(componentsData);
};

generateAdapter();
