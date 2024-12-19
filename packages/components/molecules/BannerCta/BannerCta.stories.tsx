import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';

import '@no-gravity-elements/banner-cta';
import '@no-gravity-elements/button';

type CustomArgs = {
  title: string;
  message: string;
  buttonLabel: string;
};

const meta: Meta<CustomArgs> = {
  title: 'molecules/BannerCTA',
  component: 'nge-banner-cta',
  parameters: {
    webComponents: {
      tagName: 'nge-banner-cta',
    },
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Text content for the title slot.',
      defaultValue: 'Your Custom Title',
    },
    message: {
      control: 'text',
      description: 'Text content for the message slot.',
      defaultValue: 'Your custom call-to-action message.',
    },
    buttonLabel: {
      control: 'text',
      description: 'Label for the button inside the button slot.',
      defaultValue: 'Click Me',
    },
  },
  render: ({ title, message, buttonLabel }) => html`
    <style>
      :root {
        --nge-button-padding: 8px 16px;
        --nge-button-border-radius: 280px;
      }
      h5,
      p {
        margin: 0;
      }
    </style>
    <nge-banner-cta>
      <h5 slot="title">${title}</h5>
      <p slot="message">${message}</p>
      <nge-button slot="button" value="${buttonLabel}"></nge-button>
    </nge-banner-cta>
  `,
};

export default meta;
type Story = StoryObj<CustomArgs>;

export const Default: Story = {
  args: {
    title: 'Your Custom Title',
    message: 'Your custom call-to-action message.',
    buttonLabel: 'Click Me',
  },
};
