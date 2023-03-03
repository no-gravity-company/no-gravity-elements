const esbuild = require('esbuild');
const glob = require('tiny-glob');
(async () => {
    const tsxPaths = await glob('packages/components/**/*.tsx');
    const componentPaths = tsxPaths.filter(filePath => !filePath.includes('.spec.tsx'));
    esbuild.build({
        entryNames: '[dir]/lib/[name]',
        entryPoints: componentPaths,
        bundle: true,
        minify: true,
        outdir: 'packages/components/',
        sourcemap: true,
      }).catch(() => process.exit(1));
})();
