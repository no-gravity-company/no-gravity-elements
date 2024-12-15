import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';

import '@no-gravity-elements/button';
import '@no-gravity-elements/icon';
import { ButtonTypes, IconNames, StringBoolean } from '@no-gravity-elements/types';

import { ButtonProps } from './types';

type CustomArgs = ButtonProps & { text: string; href?: string; target?: string; rel?: string };

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
    variant: {
      description: 'Button variant',
      options: Object.values(ButtonTypes),
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    icon: {
      description: 'Button Icon name',
      options: [undefined, ...Object.values(IconNames)],
      table: {
        defaultValue: { summary: undefined },
      },
    },
    loading: {
      description: 'Toggle loading state',
      control: { type: 'boolean' },
      table: {
        defaultValue: { summary: false },
      },
    },
    disabled: {
      description: 'Toggle disabled state',
      control: { type: 'boolean' },
      table: {
        defaultValue: { summary: false },
      },
    },
    href: {
      description: 'URL for the link mode',
      control: { type: 'text' },
    },
    target: {
      description: 'Target attribute for the link mode',
      control: { type: 'select' },
      options: ['_self', '_blank', '_parent', '_top'],
    },
    rel: {
      description: 'Rel attribute for the link mode',
      control: { type: 'text' },
    },
  },
  render: ({ variant, text, disabled, icon, loading, href, target, rel }) => {
    return html`
      <nge-button
        variant=${variant}
        .disabled=${disabled}
        .loading=${loading}
        value=${text}
        icon=${icon}
        href=${href || undefined}
        target=${target || undefined}
        rel=${rel || undefined}
      >
      </nge-button>
    `;
  },
};

export default meta;
type Story = StoryObj<CustomArgs>;

export const Default: Story = {
  args: {
    variant: ButtonTypes.primary,
    text: 'Button',
    icon: IconNames.cross,
    disabled: StringBoolean.FALSE,
    loading: StringBoolean.FALSE,
  },
};

export const AsLink: Story = {
  args: {
    variant: ButtonTypes.primary,
    text: 'Go to Google',
    href: 'https://www.google.com',
    target: '_blank',
    rel: 'noopener noreferrer',
    disabled: StringBoolean.FALSE,
    loading: StringBoolean.FALSE,
  },
};
