import { Story } from '@storybook/preact';
import { html } from 'lit-html';
import { h } from 'preact';
import './lib/index';
import { DisplayBoxProps } from './types';

export default {
  title: 'DisplayBox',
  component: 'nge-display-box',
  parameters: {
    // Specify that the component is a Web Component
    webComponents: {
      // Set the tag name of the Web Component
      tagName: 'nge-display-box',
    },
  },
};

export const Default: Story<DisplayBoxProps> = (args): any => {
  return html` <nge-display-box /> `;
};
