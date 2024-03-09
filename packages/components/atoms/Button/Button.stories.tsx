import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';

import { ButtonProps, ButtonTypes } from '@atoms/Button/types';

import '@no-gravity-elements/button';

type CustomArgs = ButtonProps & { text: string };

const meta: Meta<CustomArgs> = {
  title: 'Button',
  component: 'nge-button',
  parameters: {
    webComponents: {
      tagName: 'nge-button',
    },
  },
  argTypes: {
    text: {
      description: 'Custom text',
      control: { type: 'text' },
    },
    type: {
      description: 'Button type',
      options: Object.values(ButtonTypes),
      table: {
        defaultValue: { summary: ButtonTypes.primary },
      },
    },
  },
  render: ({ type, text }) => html` <nge-button type=${type}>${text}</nge-button> `,
};

export default meta;
type Story = StoryObj<CustomArgs>;

export const Default: Story = {
  args: {
    type: ButtonTypes.primary,
    text: 'Button',
  },
};
