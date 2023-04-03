const esbuild = require('esbuild');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require('path');

module.exports = {
  stories: ['../packages/components/**/*.stories.@(ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/web-components',
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

    config.resolve.alias = {
      ...config.resolve.alias,
      '@atoms': path.resolve(__dirname, '../packages/components/atoms'),
      '@molecules': path.resolve(__dirname, '../packages/components/molecules'),
      '@organisms': 'packages/components/organisms',
      '@templates': 'packages/components/templates',
      '@pages': 'packages/components/pages',
      '@components': 'packages/components',
      '@hooks': 'packages/hooks',
      '@utils': 'packages/utils',
      '@context': 'packages/context',
      '@const': 'packages/const',
      '@types': 'packages/types',
    };
    return config;
  },
};
