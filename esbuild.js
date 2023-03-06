const esbuild = require('esbuild');
const chokidar = require('chokidar');
const glob = require('tiny-glob');

const getCommonOps = (componentPaths) => {
    const ops = {
        entryNames: '[dir]/lib/index',
        entryPoints: componentPaths,
        bundle: true,
        minify: true,
        outdir: 'packages/components/',
        sourcemap: true,
        platform: 'browser',
        target: 'esnext',
        format: 'esm',
        allowOverwrite: true,
    };
    return ops;
};

(async () => {
    const componentPaths = await glob('packages/components/**/register.ts');
    const buildOps = getCommonOps(componentPaths);
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
