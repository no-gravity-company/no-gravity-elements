import { h } from 'preact';
import './lib/index';

export default {
  title: 'DisplayBox',
  parameters: {
    // Specify that the component is a Web Component
    webComponents: {
      // Set the tag name of the Web Component
      tagName: 'nge-display-box',
    },
  },
};

export const Default = () => <nge-display-box />;
