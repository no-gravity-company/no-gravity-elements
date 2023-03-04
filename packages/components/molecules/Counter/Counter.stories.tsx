import { h } from 'preact';
import './lib/index';

export default {
  title: 'My Counter Molecules',
  parameters: {
    // Specify that the component is a Web Component
    webComponents: {
      // Set the tag name of the Web Component
      tagName: 'my-counter',
    },
  },
};

export const DefaultMolecules = () => <my-counter />;
