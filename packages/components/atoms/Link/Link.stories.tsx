import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';

import '@no-gravity-elements/link';
import { TypographySizes } from '@no-gravity-elements/types';

import { LinkProps } from './types';

type CustomArgs = LinkProps & { text: string };

const meta: Meta<CustomArgs> = {
  title: 'atoms/Link',
  component: 'nge-link',
  parameters: {
    webComponents: {
      tagName: 'nge-link',
    },
  },
  argTypes: {
    text: {
      description: 'Custom text',
      control: { type: 'text' },
    },
    size: {
      description: 'Typography size used for the link',
      options: Object.values(TypographySizes),
      table: {
        defaultValue: { summary: TypographySizes.p },
      },
    },
    href: {
      description: 'Link url',
      control: { type: 'text' },
    },
  },
  render: ({ size, text, href }) =>
    html` <nge-link size="${size}" href="${href}">${text}</nge-link> `,
};

export default meta;
type Story = StoryObj<CustomArgs>;

export const Default: Story = {
  args: {
    href: '/',
    text: 'Link',
    size: TypographySizes.h6,
  },
};
