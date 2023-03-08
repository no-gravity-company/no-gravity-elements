// .storybook/preview.js

const customViewports = {
    Tablet: {
        name: 'Tablet 768px',
        styles: {
            width: '768px',
            height: '963px',
        },
    },
    mobile: {
        name: 'Mobile 375px',
        styles: {
            width: '375px',
            height: '800px',
        },
    },
    Desktop: {
        name: 'Desktop 1240px',
        styles: {
            width: '1240px',
            height: '1000px',
        },
    },
};

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    viewport: { viewports: customViewports },
    controls: {
        expanded: true,
        presetColors: [
            { color: '#ff4785', title: 'Coral' },
            'rgba(0, 159, 183, 1)',
            '#fe4a49',
        ],
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};
