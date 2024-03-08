import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';

import '@no-gravity-elements/card';

const meta: Meta = {
  title: 'Card',
  component: 'nge-card',
  parameters: {
    webComponents: {
      tagName: 'nge-card',
    },
  },
  argTypes: {},
  render: () => html`
    <style>
      div {
        height: 200px;
        width: 200px;
      }
    </style>
    <nge-card><div /></nge-card>
  `,
};

export default meta;

export const Default: StoryObj = {
  args: {},
};
