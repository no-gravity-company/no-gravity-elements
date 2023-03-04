import { h } from 'preact';
import './lib/Counter';

export default {
  title: 'My Counter',
  parameters: {
    // Specify that the component is a Web Component
    webComponents: {
      // Set the tag name of the Web Component
      tagName: 'my-counter',
    },
  },
};

export const Default = () => <my-counter />;
