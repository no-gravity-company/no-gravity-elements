import { Story } from '@storybook/preact';
import { html } from 'lit-html';

import '@no-gravity-elements/info-box';

import { InfoBoxProps } from './types';

export default {
  title: 'molecules/InfoBox',
  // decorators: [withCustomEventListeners],
  component: 'nge-info-box',
  parameters: {
    // Specify that the component is a Web Component
    webComponents: {
      // Set the tag name of the Web Component
      tagName: 'nge-info-box',
    },
    actions: {
      handles: ['nge-info-box-button-click'],
    },
  },
  controls: {},
};
export const Default: Story<InfoBoxProps> = (): any => {
  return html` <nge-info-box /> `;
};

Default.args = {
  label: 'Default label',
};
