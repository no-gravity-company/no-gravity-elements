import { Story } from '@storybook/preact';
import { html } from 'lit-html';

import '@no-gravity-elements/card';

export default {
  title: 'Card',
  component: 'nge-card',
  parameters: {
    webComponents: {
      tagName: 'nge-card',
    },
  },
  argTypes: {},
};

export const Default: Story = (): any => {
  return html`
    <style>
      div {
        height: 200px;
        width: 200px;
      }
    </style>
    <nge-card><div></div></nge-card>
  `;
};

Default.args = {};
