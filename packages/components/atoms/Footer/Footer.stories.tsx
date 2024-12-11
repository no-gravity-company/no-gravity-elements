import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';

import { FooterProps } from './types';

import '@no-gravity-elements/footer';

type CustomArgs = FooterProps & { text: string };

const meta: Meta<CustomArgs> = {
  title: 'atoms/Footer',
  component: 'nge-footer',
  parameters: {
    webComponents: {
      tagName: 'nge-footer',
    },
  },
  argTypes: {
    
  },
  render: ({  }) => html` <nge-footer>
  <style>
  :root {
  --nge-footer-height: 80px;
  --nge-footer-padding: 16px;
  --nge-footer-background-color: #2c3e50;
  --nge-footer-text-color: #ffffff;
  --nge-footer-link-color: #1abc9c;
  --nge-footer-link-hover-color: #16a085;
  --nge-footer-gap: 8px;
  --nge-footer-border-top: 1px solid #ddd;
}
  a { color: white; text-decoration: none;}
  </style>
  <div slot="branding">Brand Mock</div>
      <div slot="content">
        <ul>
          <li><a href="#">Link 1</a></li>
          <li><a href="#">Link 2</a></li>
          <li><a href="#">Link 3</a></li>
        </ul>
      </div>
      <div slot="social">
        <a href="#">Social 1</a>
        <a href="#">Social 2</a>
        <a href="#">Social 3</a>
      </div></nge-footer> `,
};

export default meta;
type Story = StoryObj<CustomArgs>;

export const Default: Story = {
  args: {
  },
};
