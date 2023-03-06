require('./esbuild.js');
const path = require('path');

const globalAny = global;
globalAny.global = globalAny;

module.exports = function (config) {
    config.set({
        browsers: ['ChromeHeadless'],
        frameworks: ['mocha', 'chai', 'snapshot', 'mocha-snapshot'],
        reporters: ['spec'],
        files: [
            'packages/**/*.test.ts',
            'packages/**/*.test.tsx',
            'packages/**/*/lib/index.js',
            './__snapshots__/**/*.md',
        ],
        plugins: [
            require('karma-chrome-launcher'),
            require('karma-mocha'),
            require('karma-chai'),
            require('karma-spec-reporter'),
            require('karma-mocha-snapshot'),
            require('karma-snapshot'),
            'karma-esbuild',
        ],
        preprocessors: {
            'packages/**/*.test.ts': ['esbuild'],
            'packages/**/*.test.tsx': ['esbuild'],
            'packages/**/*/lib/index.js': ['esbuild'],
            './__snapshots__/**/*.md': ['snapshot'],
        },
        singleRun: true,
        concurrency: Infinity,
        snapshot: {
            update: !!process.env.UPDATE,
            prune: !!process.env.PRUNE,
            pathResolver: function (basePath, suiteName) {
                return path.join(basePath, '__snapshots__', suiteName + '.md');
            },
        },
        mochaReporter: {
            showDiff: true,
        },
    });
};
