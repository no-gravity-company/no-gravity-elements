import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';

import '@no-gravity-elements/header';

const meta: Meta = {
  title: 'Header',
  component: 'nge-header',
  parameters: {
    webComponents: {
      tagName: 'nge-header',
    },
  },
  argTypes: {
  },
  render: () => html`
  <style type="text/css">
    .sb-show-main.sb-main-padded {
    padding: 0px;
    }
  </style>
  <nge-header>
    <div slot="logo">Logo</div>
    <nav slot="navigation">
      <div>Link 1</div>
      <div>Link 2</div>
      <div>Link 3</div>
    </nav>
    <div slot="options">User Options</div>
  </nge-header>`
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {},
};
