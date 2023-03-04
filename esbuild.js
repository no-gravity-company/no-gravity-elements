const esbuild = require('esbuild');
const glob = require('tiny-glob');
(async () => {
  const tsxPaths = await glob('packages/components/**/*.tsx');
  const componentPaths = tsxPaths.filter(
    (filePath) =>
      !filePath.includes('.spec.tsx') && !filePath.includes('.stories.tsx')
  );
  esbuild
    .build({
      entryNames: '[dir]/lib/[name]',
      entryPoints: componentPaths,
      bundle: true,
      minify: true,
      outdir: 'packages/components/',
      sourcemap: true,
      platform: 'browser',
      target: ['chrome58', 'firefox57', 'safari11', 'edge16'],
    })
    .catch(() => process.exit(1));
})();
