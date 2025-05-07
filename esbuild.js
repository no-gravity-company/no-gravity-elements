const esbuild = require('esbuild');
const chokidar = require('chokidar');
const { sassPlugin } = require('esbuild-sass-plugin');
const glob = require('tiny-glob');
const webComponentsPlugin = require('./plugins/web-components-plugin');
const { minify } = require('csso');
const fs = require('fs');
const path = require('path');

// Configuración según el entorno
const isDev = process.argv.includes('--dev') || process.env.NODE_ENV !== 'production';
const buildMode = isDev ? 'desarrollo' : 'producción';
const shouldAnalyze = process.argv.includes('--analyze');

// Asegurarse de que existe el directorio dist
if (!fs.existsSync('dist')) {
  fs.mkdirSync('dist');
}

function generateStats(result, outfile) {
  const stats = {
    assets: [],
    chunks: [],
    modules: []
  };

  // Procesar outputs
  for (const [file, info] of Object.entries(result.metafile.outputs)) {
    const relativePath = path.relative(process.cwd(), file)
      .replace('/lib/', '/') // Eliminar /lib/ de la ruta
      .replace('packages/', '') // Eliminar packages/ del inicio
      .replace('dist/', ''); 
    
    // Añadir asset
    stats.assets.push({
      name: relativePath,
      size: info.bytes,
      chunks: [path.basename(file, path.extname(file))],
      chunkNames: [path.basename(file, path.extname(file))],
      emitted: true
    });

    // Añadir chunk
    stats.chunks.push({
      id: relativePath,
      names: [path.basename(file, path.extname(file))],
      files: [relativePath],
      size: info.bytes
    });

    // Añadir módulos
    if (info.inputs) {
      for (const [inputFile, inputInfo] of Object.entries(info.inputs)) {
        stats.modules.push({
          name: inputFile.replace('packages/', ''), // Ajustar ruta de módulos también
          size: inputInfo.bytes || 0,
          chunks: [path.basename(file, path.extname(file))]
        });
      }
    }
  }

  fs.writeFileSync(outfile, JSON.stringify(stats, null, 2));
}

const getCommonOps = (componentPaths) => {
  const ops = {
    entryNames: '[dir]/lib/index',
    entryPoints: componentPaths,
    bundle: true,
    minify: !isDev,
    outbase: 'packages',
    outdir: 'packages',
    sourcemap: true,
    platform: 'browser',
    target: 'esnext',
    format: 'esm',
    allowOverwrite: true,
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
    metafile: true,
  };
  return ops;
};

const getDocsOps = (componentPaths) => {
  const ops = {
    entryNames: '[dir]/index',
    entryPoints: componentPaths,
    bundle: true,
    minify: !isDev,
    outbase: 'packages/components',
    outdir: 'dist/docs',
    sourcemap: true,
    platform: 'browser',
    target: 'esnext',
    format: 'esm',
    allowOverwrite: true,
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
    metafile: true,
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
    metafile: true,
  };
  return ops;
};

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
    const docsOps = getDocsOps(componentPaths);

    console.log(`📦 Construyendo ${componentPaths.length} componentes...`);
    
    const [componentResult, messageBusResult, docsResult] = await Promise.all([
      esbuild.build(buildOps),
      esbuild.build(messageBusOps),
      esbuild.build(docsOps)
    ]);

    if (shouldAnalyze) {
      console.log('📊 Generando estadísticas del bundle...');
      docsResult
      generateStats(docsResult, 'dist/stats.json');
    }

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
            esbuild.build(messageBusOps),
            esbuild.build(docsOps)
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
