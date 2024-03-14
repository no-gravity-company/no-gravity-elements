import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';

import { IconProps } from '@atoms/Icon/types';

import { IconNames, IconSizes } from '@types';

import '@no-gravity-elements/icon';

type CustomArgs = IconProps & { text: string };

const meta: Meta<CustomArgs> = {
  title: 'atoms/Icon',
  component: 'nge-icon',
  parameters: {
    webComponents: {
      tagName: 'nge-icon',
    },
  },
  argTypes: {
    name: {
      description: 'Icon name',
      options: Object.values(IconNames),
    },
    size: {
      description: 'Icon size',
      options: Object.values(IconSizes),
      table: {
        defaultValue: { summary: IconSizes.regular },
      },
    },
  },
  render: ({ name, size }) => html` <nge-icon name=${name} size=${size}></nge-icon> `,
};

export default meta;
type Story = StoryObj<CustomArgs>;

export const Default: Story = {
  args: {
    size: IconSizes.regular,
    name: IconNames.cross,
  },
};
