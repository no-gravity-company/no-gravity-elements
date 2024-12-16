const esbuild = require('esbuild');
const chokidar = require('chokidar');
const { sassPlugin } = require('esbuild-sass-plugin');
const glob = require('tiny-glob');
const webComponentsPlugin = require('./plugins/web-components-plugin');
const { execSync } = require('child_process');
const { minify } = require('csso');

// Configuración según el entorno
const isDev = process.argv.includes('--dev') || process.env.NODE_ENV !== 'production';
const buildMode = isDev ? 'desarrollo' : 'producción';

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

// Manejo de errores mejorado
const handleBuildError = (error, context) => {
  console.error(`🔴 Error en build ${context}:`);
  console.error('  → Mensaje:', error.message);
  if (error.location) {
    console.error('  → Archivo:', error.location.file);
    console.error('  → Línea:', error.location.line);
    console.error('  → Columna:', error.location.column);
  }
  if (!isDev) {
    process.exit(1);
  }
};

const lernaJsonList = JSON.parse(execSync('lerna ls --json').toString());

const getCommonOps = (componentPaths) => {
  const ops = {
    entryNames: '[dir]/lib/index',
    entryPoints: componentPaths,
    bundle: true,
    minify: !isDev,
    outdir: findCommonPath(componentPaths),
    sourcemap: true,
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
    logLevel: isDev ? 'info' : 'warning',
  };
  return ops;
};

const getMessageBusOps = () => {
  const ops = {
    entryPoints: ['packages/messageBus/index.ts'],
    bundle: true,
    outfile: 'packages/messageBus/lib/index.js',
    minify: !isDev,
    sourcemap: true,
    platform: 'browser',
    target: 'esnext',
    format: 'esm',
    allowOverwrite: true,
    logLevel: isDev ? 'info' : 'warning',
  };
  return ops;
};

(async () => {
  try {
    console.log(`🚀 Iniciando build en modo ${buildMode}...`);
    console.time('⏱️ Tiempo total de build');

    let componentPaths = await glob('packages/components/**/*.tsx');
    componentPaths = componentPaths.filter(
      (path) => !path.includes('.stories.tsx') && !path.includes('.spec.tsx'),
    );

    const buildOps = getCommonOps(componentPaths);
    const messageBusOps = getMessageBusOps();

    console.log(`📦 Construyendo ${componentPaths.length} componentes...`);
    
    await Promise.all([
      esbuild.build(buildOps),
      esbuild.build(messageBusOps)
    ]);

    console.timeEnd('⏱️ Tiempo total de build');
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
