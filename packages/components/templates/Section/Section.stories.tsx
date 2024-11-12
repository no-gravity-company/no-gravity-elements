import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';

import '@no-gravity-elements/section';


const meta: Meta = {
  title: 'templates/Section',
  component: 'nge-section',
  parameters: {
    webComponents: {
      tagName: 'nge-section',
    },
  },
  argTypes: {
    
  },
  render: () => html` <nge-section><h1>Titulo</h1><span>Lorem ipsum span</span><p>Lorem ipsum paragraph</p></nge-section> `,
};

export default meta;
type Story = StoryObj;

export const Default: Story = {

};
