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
    babel: async (options) => ({
        ...options,
        presets: [['@babel/typescript', { jsxPragma: 'h' }]],
    }),
};
