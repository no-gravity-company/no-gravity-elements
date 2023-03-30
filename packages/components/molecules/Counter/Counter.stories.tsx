import { h } from 'preact';
import { Story } from '@storybook/preact';
import { html } from 'lit-html';

import '@molecules/Counter/lib/index';

export default {
  title: 'My Counter Molecules',
  component: 'nge-counter',
  parameters: {
    // Specify that the component is a Web Component
    webComponents: {
      // Set the tag name of the Web Component
      tagName: 'nge-counter',
    },
  },
};

export const Default: Story<any> = (args): any => {
  return html` <nge-counter title="My counter molecules" />`;
};
