const fs = require('fs');
const fse = require('fs-extra');
const { analyzeText, transformAnalyzerResult } = require('web-component-analyzer');
const path = require('path');

async function writeFileWithDir(filePath, data) {
  await fse.ensureDir(path.dirname(filePath));
  await fs.promises.writeFile(filePath, data, { encoding: 'utf-8' });
}

function camelToKebab(camelCase) {
  return camelCase.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

function replaceFunctionWithClass(str, componentName) {
  const regex = new RegExp(
    `const\\s+${componentName}:\\s*.+|function\\s+${componentName}\\s*\\(`,
    'gm',
  );
  const subst = `class ${componentName} extends HTMLElement {`;

  return str.replace(regex, subst);
}

// TODO Refactor the logic
function webComponentsPlugin() {
  let webComponentsAnalysis = {};
  return {
    name: 'web-components-plugin',
    setup(build) {
      build.onLoad({ filter: /\.tsx$/ }, async (args) => {
        const contents = await fs.promises.readFile(args.path, 'utf8');
        const match = args.path.match(/([^/]+)\.tsx$/);
        const componentName = match[1];
        const importCss = `import classes from './${componentName}.modules.scss'`;
        let newContent = `${importCss}\nimport register from 'preact-custom-element';\n${contents}`;
        newContent = newContent.replace(
          /<\/Fragment>(?!.*<\/Fragment>)/,
          '    <style type="text/css">{classes}</style>\n\t</Fragment>',
        );
        const componentNameInKebab = camelToKebab(componentName);
        // Create analyzer
        let analyzeContent = newContent.replace(
          `export default ${componentName};`,
          `customElements.define("nge-${componentNameInKebab}", ${componentName})`,
        );
        // Register component to make it a web-component
        newContent = newContent.replace(
          `export default ${componentName};`,
          `const alreadyDefined = (tagName: string) => customElements.get(tagName) !== undefined;
                    if (!alreadyDefined('nge-${componentNameInKebab}')) {
                            register(${componentName}, 'nge-${componentNameInKebab}', ${componentName}?.observedAttributes || [], { shadow: true });
                    }`,
        );
        // Web component analyzer
        analyzeContent = replaceFunctionWithClass(analyzeContent, componentName);
        const { results, program } = analyzeText(analyzeContent);
        const format = 'json';
        let output = transformAnalyzerResult(format, results, program);
        const componentAnalysis = JSON.parse(output, (key, value) => {
          if (Array.isArray(value)) {
            return value.map((v) => {
              if (typeof v === 'object') {
                return Object.assign({}, v);
              }
              return v;
            });
          }
          return value;
        });
        if (!webComponentsAnalysis?.tags) {
          webComponentsAnalysis = componentAnalysis;
        } else {
          webComponentsAnalysis.tags = webComponentsAnalysis.tags.concat(componentAnalysis.tags);
        }

        return {
          contents: newContent,
          loader: 'tsx',
        };
      });

      build.onEnd(async ({ errors }) => {
        if (!errors.length) {
          const result = JSON.stringify(webComponentsAnalysis, (key, value) => {
            const auxValueArray = [];
            if (key === 'properties' && Array.isArray(value)) {
              value.forEach((v) => {
                if (v?.description) auxValueArray.push(v);
              });
              return auxValueArray;
            }
            return value;
          });

          await writeFileWithDir('.storybook/custom-elements.json', result);
        } else {
          console.error(errors);
        }
      });
    },
  };
}

module.exports = webComponentsPlugin;
