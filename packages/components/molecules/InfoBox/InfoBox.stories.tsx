import { h } from 'preact';
import { Story } from '@storybook/preact';
import { html } from 'lit-html';

import { InfoBoxProps } from '@molecules/InfoBox/types';

import '@no-gravity-elements/info-box';

export default {
  title: 'InfoBox',
  // decorators: [withCustomEventListeners],
  component: 'nge-info-box',
  parameters: {
    // Specify that the component is a Web Component
    webComponents: {
      // Set the tag name of the Web Component
      tagName: 'nge-info-box',
    },
  },
  controls: {},
};
export const Default: Story<InfoBoxProps> = (args): any => {
  return html` <nge-info-box {...props} onButtonClick={() => action('onButtonClick')()} /> `;
};

Default.args = {
  label: 'Default label',
};
