import { addDecorator, Story } from '@storybook/preact';
import { h } from 'preact';
import { useEffect } from 'preact/hooks';
import { action, withActions } from '@storybook/addon-actions';
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
    window.addEventListener('buttonClick', (event) => {
        const { type } = event;
        action(type)();
    });

    return (
        <nge-info-box {...props} onbuttonclick={() => console.log('aaad')} />
    );
};

export const Default = Template;
Default.args = {
    label: 'Default label',
};
