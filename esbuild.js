const esbuild = require('esbuild');
const glob = require('tiny-glob');
(async () => {
  const componentPaths = await glob('packages/components/**/register.ts');
  esbuild
    .build({
      entryNames: '[dir]/lib/index',
      entryPoints: componentPaths,
      bundle: true,
      minify: true,
      outdir: 'packages/components/',
      sourcemap: true,
      platform: 'browser',
    })
    .catch(() => process.exit(1));
})();
