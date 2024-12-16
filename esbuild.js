const esbuild = require('esbuild');
const chokidar = require('chokidar');
const { sassPlugin } = require('esbuild-sass-plugin');
const glob = require('tiny-glob');
const webComponentsPlugin = require('./plugins/web-components-plugin');
const { execSync } = require('child_process');
const { minify } = require('csso');

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
const lernaJsonList = JSON.parse(execSync('lerna ls --json').toString());

const getEnvironmentConfig = (isDev = false) => ({
  minify: !isDev,
  sourcemap: isDev,
});

const handleBuildError = (error, context) => {
  console.error(`🔴 Error en build ${context}:`);
  console.error('  → Mensaje:', error.message);
  console.error('  → Location:', error.location);
  process.exit(1);
};

const getCommonOps = (componentPaths, isDev = false) => {
  const envConfig = getEnvironmentConfig(isDev);
  const ops = {
    entryNames: '[dir]/lib/index',
    entryPoints: componentPaths,
    bundle: true,
    minify: envConfig.minify,
    outdir: findCommonPath(componentPaths),
    sourcemap: envConfig.sourcemap,
    platform: 'browser',
    target: 'esnext',
    format: 'esm',
    allowOverwrite: true,
    external: lernaJsonList.map((i) => i.name),
    plugins: [
      sassPlugin({
        type: 'css-text',
        async transform(source) {
          return minify(source).css;
        },
      }),
      webComponentsPlugin(),
    ],
  };
  return ops;
};

const getMessageBusOps = () => {
  const ops =   {
    entryPoints: ['packages/messageBus/index.ts'],  
    bundle: true,
    outfile: 'packages/messageBus/lib/index.js', 
    minify: true,
    sourcemap: true, 
    platform: 'browser', 
    target: 'esnext',
    format: 'esm',
    allowOverwrite: true,
  };
  return ops;
};

(async () => {
  try {
    const isDev = process.argv.includes('--dev');
    console.log(`🚀 Iniciando build en modo ${isDev ? 'desarrollo' : 'producción'}...`);

    let componentPaths = await glob('packages/components/**/*.tsx');
    componentPaths = componentPaths.filter(
      (path) => !path.includes('.stories.tsx') && !path.includes('.spec.tsx'),
    );

    const buildOps = getCommonOps(componentPaths, isDev);
    const messageBusOps = getMessageBusOps();

    console.time('⏱️ Tiempo de build');
    
    await Promise.all([
      esbuild.build(buildOps),
      esbuild.build(messageBusOps)
    ]);

    console.timeEnd('⏱️ Tiempo de build');
    console.log('✅ Build completado exitosamente');

    if (process.argv.includes('--watch')) {
      console.log('👀 Iniciando modo watch...');
      const watcher = chokidar.watch([
        'packages/components/**/*.{ts,tsx}',
        '!packages/components/**/*.{spec,stories}.*',
      ]);

      watcher.on('change', async (path) => {
        console.log(`🔄 Cambio detectado en ${path}, rebuilding...`);
        try {
          console.time('⏱️ Rebuild time');
          await Promise.all([
            esbuild.build(buildOps),
            esbuild.build(messageBusOps)
          ]);
          console.timeEnd('⏱️ Rebuild time');
          console.log(`✅ Rebuild de ${path} completado!`);
        } catch (error) {
          handleBuildError(error, path);
        }
      });
    }
  } catch (error) {
    handleBuildError(error, 'inicial');
  }
})();
