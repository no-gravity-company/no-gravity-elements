import { h } from 'preact';
import './lib/index';

export default {
    title: 'My Counter Molecules',
    parameters: {
        // Specify that the component is a Web Component
        webComponents: {
            // Set the tag name of the Web Component
            tagName: 'your-counter',
        },
    },
};

export const Default = () => <your-counter />;
