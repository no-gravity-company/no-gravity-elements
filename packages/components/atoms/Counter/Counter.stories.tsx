import { h } from 'preact';

export default {
    title: 'My Counterr',
    parameters: {
        // Specify that the component is a Web Component
        webComponents: {
            // Set the tag name of the Web Component
            tagName: 'my-counter',
        },
    },
};

export const Default = () => <my-counter />;
