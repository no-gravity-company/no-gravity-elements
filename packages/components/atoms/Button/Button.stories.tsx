import { Story } from '@storybook/preact';
import { html } from 'lit-html';

import { ButtonProps, ButtonTypes } from '@atoms/Button/types';

import '@no-gravity-elements/button';

export default {
  title: 'Button',
  component: 'nge-button',
  parameters: {
    webComponents: {
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
      control: 'select',
      options: ['primary', 'secondary', 'destructive', 'outline', 'ghost', 'disabled'],
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
