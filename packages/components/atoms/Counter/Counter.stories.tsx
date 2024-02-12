import { h } from 'preact';
import { Meta, Story } from '@storybook/preact';
import { html, render } from 'lit-html';

import { CounterProps } from '@atoms/Counter/types';

import '@atoms/Counter/lib/index';

export default {
  title: 'My Counterr',
  component: 'nge-counter',
  parameters: {
    // Specify that the component is a Web Component
    webComponents: {
      // Set the tag name of the Web Component
      tagName: 'nge-counter',
    },
  },
  // Set the controls
  argTypes: {
    title: {
      description: 'Component title',
      control: 'text',
      table: {
        defaultValue: { summary: 'string' },
      },
    },
  },
};

export const Default: Story<CounterProps> = (args): any => {
  const { title } = args;

  return html` <nge-counter title=${title} onPop=${() => console.log('pop')} /> `;

  // Return an empty template literal as required by Storybook
};

// Default value for title
Default.args = {
  title: 'Default title',
};
