import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';

import { Page404Props } from './types';

import '@no-gravity-elements/page404';

type CustomArgs = Page404Props;

const meta: Meta<CustomArgs> = {
  title: 'pages/Page404',
  component: 'nge-page404',
  parameters: {
    webComponents: {
      tagName: 'nge-page404',
    },
  },
  argTypes: {},
  render: ({}) => html`
    <nge-page404>
      <h1 slot="title">Oops! Page Not Found</h1>
      <p slot="message">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <div slot="actions">
        <a href="/" class="home-link">Go Back Home</a>
      </div>
    </nge-page404>
  `,
};

export default meta;
type Story = StoryObj<CustomArgs>;

export const Default: Story = {
  args: {},
};
