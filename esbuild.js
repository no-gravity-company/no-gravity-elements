const esbuild = require('esbuild');
const chokidar = require('chokidar');
const { sassPlugin } = require('esbuild-sass-plugin');
const glob = require('tiny-glob');
const webComponentsPlugin = require('./plugins/web-components-plugin');

function findCommonPath(componentPaths) {
  const separator = '/';
  let commonPrefix = '';
  const substrings = componentPaths.map((str) => str.split(separator));
  for (let i = 0; i < substrings[0].length; i++) {
    const substring = substrings[0][i];
    if (substrings.every((arr) => arr[i] === substring)) {
      commonPrefix += substring + separator;
    } else {
      break;
    }
  }
  return commonPrefix;
}

const getCommonOps = (componentPaths, isSourceMapExplorerAnalyzer) => {
  const ops = {
    entryNames: `[dir]${isSourceMapExplorerAnalyzer ? '' : '/lib'}/index`,
    entryPoints: componentPaths,
    bundle: true,
    minify: true,
    outdir: isSourceMapExplorerAnalyzer ? 'source-map-results' : findCommonPath(componentPaths),
    sourcemap: true,
    platform: 'browser',
    target: 'esnext',
    format: 'esm',
    allowOverwrite: true,
    plugins: [
      sassPlugin({
        type: 'css-text',
      }),
      webComponentsPlugin(isSourceMapExplorerAnalyzer),
    ],
  };
  return ops;
};

(async () => {
  let componentPaths = await glob('packages/components/**/*.tsx');
  componentPaths = componentPaths.filter(
    (path) => !path.includes('.stories.tsx') && !path.includes('.spec.tsx'),
  );
  const isSourceMapExplorerAnalyzer = process.argv.includes('--source-map-explorer');
  const buildOps = getCommonOps(componentPaths, isSourceMapExplorerAnalyzer);
  await esbuild.build(buildOps);
  if (process.argv.includes('--watch')) {
    const watcher = chokidar.watch([
      'packages/components/**/*.{ts,tsx}',
      '!packages/components/**/*.{spec,stories}.*',
    ]);
    watcher.on('change', async (path) => {
      console.log(`Detected change in ${path}, rebuilding...`);
      try {
        await esbuild.build(buildOps);
        console.log(`Rebuild of ${path} succeeded!`);
      } catch (error) {
        console.error(`Rebuild of ${path} failed:`, error);
      }
    });
  }
})();
