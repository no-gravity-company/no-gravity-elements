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

const getComponentName = (fileContent) => {
  const componentNameRegex = /\/([^\/]+)\/package.json$/;
  const match = componentNameRegex.exec(fileContent);
  return match ? match[1] : null;
};

const getComponentsData = async () => {
  let componentPaths = await glob('../components/**/*/package.json');

  return componentPaths.map((componentPath) => {
    const componentName = getComponentName(componentPath);

    const typesFilePath = componentPath.replace('package.json', 'types/index.ts');
    const propsTypeName = `${componentName}Props`;
    const hasProps = !!readFile(typesFilePath)?.includes(propsTypeName);

    return {
      componentName,
      hasProps,
    };
  });
};

const generateAdapter = async () => {
  const componentsData = await getComponentsData();

  const imports = componentsData.reduce((acc, { componentName, hasProps }) => {
    if (!hasProps) return acc;
    return (
      acc +
      `import type { ${componentName}Props } from '@no-gravity-elements/${getKebabCase(
        componentName,
      )}/types';
`
    );
  }, '');

  const declarations = componentsData.reduce((acc, { componentName, hasProps }) => {
    const propsDeclaration = hasProps ? `${componentName}Props & ` : '';
    return (
      acc +
      `
      'nge-${getKebabCase(componentName)}': ${propsDeclaration}ReactWebComponent;`
    );
  }, '');

  const content = `// @ts-nocheck
${imports}
export * from './hooks';

interface ReactWebComponent {
  children?: React.ReactNode;
  ref?: React.LegacyRef<HTMLElement>;
  key?: React.Key | null;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {${declarations}
    }
  }
}
`;

  writeFile('index.ts', content);
};

generateAdapter();
