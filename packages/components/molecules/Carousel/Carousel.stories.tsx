import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';

import '@no-gravity-elements/carousel';
import { CarouselProps, StringBoolean } from './types';

type CustomArgs = CarouselProps & {
  numSlides?: number;
  autoplayInterval?: number;
};

const meta: Meta<CustomArgs> = {
  title: 'molecules/Carousel',
  component: 'nge-carousel',
  parameters: {
    webComponents: {
      tagName: 'nge-carousel',
    },
  },
  argTypes: {
    numSlides: {
      description: 'Number of slides for demo',
      control: { type: 'number', min: 1, max: 6 },
    },
    autoplay: {
      description: 'Enable autoplay',
      control: { type: 'boolean' },
    },
    autoplayInterval: {
      description: 'Autoplay interval (ms)',
      control: { type: 'number', min: 1000, max: 10000 },
    },
    navigation: {
      description: 'Show navigation arrows',
      control: { type: 'boolean' },
    },
    indicators: {
      description: 'Show indicators',
      control: { type: 'boolean' },
    },
    infinite: {
      description: 'Infinite loop',
      control: { type: 'boolean' },
    },
    pauseOnHover: {
      description: 'Pause on hover',
      control: { type: 'boolean' },
    },
  },
  render: ({
    autoplay,
    autoplayInterval,
    navigation,
    indicators,
    infinite,
    pauseOnHover,
    numSlides = 3,
  }) => {
    const slides = Array.from({ length: numSlides }, (_, i) =>
      html`<div
        style="height: 300px; background: hsl(${i * (360 / numSlides)}, 70%, 60%); display: flex; align-items: center; justify-content: center; font-size: 32px; color: white; font-weight: bold;"
      >
        Slide ${i + 1}
      </div>`,
    );

    return html`
      <nge-carousel
        ?autoplay=${autoplay}
        .autoplayInterval=${autoplayInterval}
        ?navigation=${navigation}
        ?indicators=${indicators}
        ?infinite=${infinite}
        ?pauseOnHover=${pauseOnHover}
      >
        ${slides}
      </nge-carousel>
    `;
  },
};

export default meta;
type Story = StoryObj<CustomArgs>;

export const Default: Story = {
  args: {
    numSlides: 4,
    autoplay: false,
    navigation: true,
    indicators: true,
    infinite: true,
    pauseOnHover: true,
  },
};

export const Autoplay: Story = {
  args: {
    ...Default.args,
    autoplay: true,
    autoplayInterval: 2000,
  },
};

export const NoNavigation: Story = {
  args: {
    ...Default.args,
    navigation: false,
  },
};

export const IndicatorsOnly: Story = {
  args: {
    ...Default.args,
    navigation: false,
    autoplay: true,
  },
};

export const Finite: Story = {
  args: {
    ...Default.args,
    infinite: false,
  },
};

export const SingleSlide: Story = {
  args: {
    numSlides: 1,
    autoplay: false,
    navigation: false,
    indicators: false,
  },
};