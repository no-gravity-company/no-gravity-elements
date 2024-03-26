import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';

import '@no-gravity-elements/typography';
import { TypographySizes } from '@no-gravity-elements/types';

import { TypographyProps } from './types';

type CustomArgs = TypographyProps & { text: string };

const meta: Meta<CustomArgs> = {
  title: 'atoms/Typography',
  component: 'nge-typography',
  parameters: {
    webComponents: {
      tagName: 'nge-typography',
    },
  },
  argTypes: {
    text: {
      description: 'Custom text',
      control: { type: 'text' },
    },
    tag: {
      description: 'HTML tag used for the typography',
      control: { type: 'text' },
      table: {
        defaultValue: { summary: 'span' },
      },
    },
    size: {
      description: 'Typography size',
      options: Object.values(TypographySizes),
      table: {
        defaultValue: { summary: TypographySizes.p },
      },
    },
  },
  render: ({ tag, text, size }) =>
    html` <nge-typography tag="${tag}" size="${size}">${text}</nge-typography> `,
};

export default meta;
type Story = StoryObj<CustomArgs>;

export const Default: Story = {
  args: {
    tag: 'h4',
    text: 'Example typography',
    size: TypographySizes.h1,
  },
};
