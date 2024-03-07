import { Story } from '@storybook/preact';
import { html } from 'lit-html';

import { ButtonProps, ButtonTypes } from '@atoms/Button/types';

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
      description: 'Button type',
      control: { type: 'text' },
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
  },
};
type StoryButtonProps = ButtonProps & { text: string };

export const Default: Story<StoryButtonProps> = (args): any => {
  const { text, type } = args;

  return html` <nge-button type=${type}>${text}</nge-button> `;
};

Default.args = {
  type: ButtonTypes.primary,
  text: 'Button',
};
