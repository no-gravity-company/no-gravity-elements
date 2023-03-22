const fs = require('fs');

function camelToKebab(camelCase) {
  return camelCase.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

function webComponentsPlugin() {
  return {
    name: 'web-components-plugin',
    setup(build) {
      build.onLoad({ filter: /\.tsx$/ }, async (args) => {
        const contents = await fs.promises.readFile(args.path, 'utf8');
        const match = args.path.match(/([^/]+)\.tsx$/);
        const componentName = match[1];
        const importCss = `import classes from './${componentName}.modules.scss'`;
        let newContent = `${importCss}\nimport register from 'preact-custom-element';\n${contents}`;
        // TODO It can be improved to handle the location of the style tag better, instead of searching for a Fragment. Right now it forces us to use Fragment
        newContent = newContent.replace(
          /<\/Fragment>(?!.*<\/Fragment>)/,
          '    <style type="text/css">{classes}</style>\n\t</Fragment>',
        );
        // Register component to make it a web-component
        const componentNameInKebab = camelToKebab(componentName);
        newContent = newContent.replace(
          `export default ${componentName};`,
          `const alreadyDefined = (tagName: string) => customElements.get(tagName) !== undefined;
                    if (!alreadyDefined('nge-${componentNameInKebab}')) {
                            register(${componentName}, 'nge-${componentNameInKebab}', [], { shadow: true });
                    }`,
        );
        // TODO css needs to be minified
        return {
          contents: newContent,
          loader: 'tsx',
        };
      });
    },
  };
}

module.exports = webComponentsPlugin;
