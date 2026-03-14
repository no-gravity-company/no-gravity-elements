import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';

import '@no-gravity-elements/tabs';
import type { Tab } from './types';

type CustomArgs = {
  tabs: Tab[];
  activeIndex?: number;
  variant?: 'primary' | 'secondary';
  orientation?: 'horizontal' | 'vertical';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
};

const defaultTabs: Tab[] = [
  { label: 'Tab 1', content: 'This is the content of the first tab.' },
  { label: 'Tab 2', content: 'This is the content of the second tab.' },
  { label: 'Tab 3', content: 'This is the content of the third tab.' },
];

const meta: Meta<CustomArgs> = {
  title: 'molecules/Tabs',
  component: 'nge-tabs',
  parameters: {
    webComponents: {
      tagName: 'nge-tabs',
    },
  },
  argTypes: {
    tabs: {
      description: 'Array of tabs',
      control: false,
    },
    activeIndex: {
      description: 'Active tab index',
      control: { type: 'number' },
      min: 0,
      max: 5,
      table: {
        defaultValue: { summary: 0 },
      },
    },
    variant: {
      description: 'Tabs variant',
      options: ['primary', 'secondary'],
      control: { type: 'select' },
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    orientation: {
      description: 'Tabs orientation',
      options: ['horizontal', 'vertical'],
      control: { type: 'select' },
      table: {
        defaultValue: { summary: 'horizontal' },
      },
    },
    size: {
      description: 'Tabs size',
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
      table: {
        defaultValue: { summary: 'medium' },
      },
    },
    disabled: {
      description: 'Disable all tabs',
      control: { type: 'boolean' },
      table: {
        defaultValue: { summary: false },
      },
    },
  },
  render: ({ tabs, activeIndex, variant, orientation, size, disabled }) => html`
    <nge-tabs
      .tabs=${tabs}
      .activeIndex=${activeIndex}
      variant=${variant}
      orientation=${orientation}
      size=${size}
      .disabled=${disabled}
    ></nge-tabs>
  `,
};

export default meta;
type Story = StoryObj<CustomArgs>;

export const Default: Story = {
  args: {
    tabs: defaultTabs,
    activeIndex: 0,
    variant: 'primary',
    orientation: 'horizontal',
    size: 'medium',
    disabled: false,
  },
};

export const Vertical: Story = {
  args: {
    ...Default.args,
    orientation: 'vertical',
  },
};

export const SecondaryVariant: Story = {
  args: {
    ...Default.args,
    variant: 'secondary',
  },
};

export const LargeSize: Story = {
  args: {
    ...Default.args,
    size: 'large',
  },
};

export const ActiveSecondTab: Story = {
  args: {
    ...Default.args,
    activeIndex: 1,
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};