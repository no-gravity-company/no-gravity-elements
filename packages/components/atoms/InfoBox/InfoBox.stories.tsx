import { h } from 'preact';
import './lib/index';

export default {
  title: 'InfoBox',
  parameters: {
    // Specify that the component is a Web Component
    webComponents: {
      // Set the tag name of the Web Component
      tagName: 'nge-info-box',
    },
  },
};

export const Default = () => <nge-info-box />;
    