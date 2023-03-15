import { h } from 'preact';
import './lib/index';
import { Meta, Story } from '@storybook/preact';
import { CounterProps } from './types';

export default {
    title: 'My Counterr',
    parameters: {
        // Specify that the component is a Web Component
        webComponents: {
            // Set the tag name of the Web Component
            tagName: 'nge-counter',
        },
    },
    // Set the controls
    argTypes: {
        title: {
            description: 'Component title',
            control: 'text',
            table: {
                defaultValue: { summary: 'string' },
            },
        },
    },
} as Meta;

const Template: Story<CounterProps> = (props) => {
    return <nge-counter title={props.title} onPop={() => console.log('pop')} />;
};

export const Default = Template;

// Default value for title
Default.args = {
    title: 'Default title',
};
