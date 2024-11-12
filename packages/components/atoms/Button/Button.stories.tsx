import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';

import '@no-gravity-elements/button';
import '@no-gravity-elements/icon';
import { ButtonTypes, IconNames, StringBoolean } from '@no-gravity-elements/types';

import { ButtonProps } from './types';

type CustomArgs = ButtonProps & { text: string };

const meta: Meta<CustomArgs> = {
  title: 'atoms/Button',
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
    icon: {
      description: 'Button Icon name',
      options: [undefined, ...Object.values(IconNames)],
      table: {
        defaultValue: { summary: undefined },
      },
    },
  },
  render: ({ type, text, disabled, icon }) => {
    return html` <nge-button type=${type} .disabled=${disabled} value=${text} icon=${icon}> </nge-button> `;
  },
};

export default meta;
type Story = StoryObj<CustomArgs>;

export const Default: Story = {
  args: {
    type: ButtonTypes.primary,
    text: 'Button',
    icon: IconNames.cross,
    disabled: StringBoolean.FALSE,
  },
};
