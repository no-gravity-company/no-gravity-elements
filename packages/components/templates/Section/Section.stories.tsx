import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';

import { SectionProps } from './types';

import '@no-gravity-elements/section';

type CustomArgs = SectionProps & { text: string };

const meta: Meta<CustomArgs> = {
  title: 'templates/Section',
  component: 'nge-section',
  parameters: {
    webComponents: {
      tagName: 'nge-section',
    },
  },
  argTypes: {
    x: {
      description: 'Custom prop text',
      control: { type: 'text' },
    },
    text: {
      description: 'Custom text',
      control: { type: 'text' },
    },
  },
  render: ({ x, text }) => html` <nge-section x=${x}>${text}</nge-section> `,
};

export default meta;
type Story = StoryObj<CustomArgs>;

export const Default: Story = {
  args: {
    text: 'Text',
    x: 'props'
  },
};
