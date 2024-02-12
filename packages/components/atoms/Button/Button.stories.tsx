import { Story } from '@storybook/preact';
import { html } from 'lit-html';

import { ButtonProps } from '@atoms/Button/types';

import '@atoms/Button/lib/index';

export default {
  title: 'Button',
  component: 'nge-button',
  parameters: {
    // Specify that the component is a Web Component
    webComponents: {
      // Set the tag name of the Web Component
      tagName: 'nge-button',
    },
  },
  argTypes: {
    text: {
      description: 'Button text',
      control: { type: 'text' },
      table: {
        defaultValue: { summary: 'string' },
      },
    },
    type: {
      description: 'Primary colors',
      control: { type: 'text' },
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
  },
};

export const Default: Story<ButtonProps> = (args): any => {
  const { text, type } = args;

  return html` <nge-button text=${text} type=${type} /> `;
};

// Default value for title
Default.args = {
  type: 'secondary',
  text: 'Click me!',
};
