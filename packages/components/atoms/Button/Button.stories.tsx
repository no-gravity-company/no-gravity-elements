import { h } from 'preact';
import { Meta, Story } from '@storybook/preact';
import { html, render } from 'lit-html';

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
    primary: {
      description: 'Primary colors',
      control: 'boolean',
      table: {
        defaultValue: { summary: 'boolean' },
      },
    },
    style: {
      description: 'Button styles',
      control: { type: 'text' },
      table: {
        defaultValue: { summary: 'string' },
      },
    },
  },
};

export const Default: Story<ButtonProps> = (args): any => {
  const { text, type, style } = args;

  return html` <nge-button text=${text} type=${type} style=${style} /> `;
};

// Default value for title
Default.args = {
  type: 'secondary',
  text: 'Click me!',
};
