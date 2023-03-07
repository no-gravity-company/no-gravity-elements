const esbuild = require('esbuild');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
    stories: [
        '../packages/components/**/*.stories.mdx',
        '../packages/components/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
    ],
    framework: '@storybook/preact',
    webpackFinal: async (config, { configType }) => {
        // To handle tsconfig.json compilerOptions.paths
        config.resolve.plugins = [
            new TsconfigPathsPlugin({
                configFile: './tsconfig.json',
            }),
        ];
        // To use esbuild instead of webpack compiler
        config.module.rules.push({
            test: /\.[jt]sx?$/,
            loader: require.resolve('esbuild-loader'),
            options: {
                loader: 'tsx',
                sourcemap: true,
                target: 'esnext',
            },
        });
        return config;
    },
};
