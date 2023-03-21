import { Story } from '@storybook/preact';
import { h } from 'preact';
import { action } from '@storybook/addon-actions';
import './lib/index';
import { InfoBoxProps } from './types';

export default {
  title: 'InfoBox',
  // decorators: [withCustomEventListeners],
  parameters: {
    // Specify that the component is a Web Component
    webComponents: {
      // Set the tag name of the Web Component
      tagName: 'nge-info-box',
    },
  },
  controls: {},
};

const Template: Story<InfoBoxProps> = (props) => {
  return <nge-info-box {...props} onButtonClick={() => action('onButtonClick')()} />;
};

export const Default = Template;
Default.args = {
  label: 'Default label',
};
