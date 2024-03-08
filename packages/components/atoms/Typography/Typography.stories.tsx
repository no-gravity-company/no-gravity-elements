import { Story } from '@storybook/preact';
import { html } from 'lit-html';
import { TypographySizes } from 'packages/types';

import { TypographyProps } from '@atoms/Typography/types';

import '@no-gravity-elements/typography';

type StoryTypography = TypographyProps & { text: string };

export default {
  title: 'Typography',
  component: 'nge-typography',
  parameters: {
    webComponents: {
      tagName: 'nge-typography',
    },
  },
  argTypes: {
    text: {
      description: 'Typography text',
      control: { type: 'text' },
      table: {
        defaultValue: { summary: 'Example typography' },
      },
    },
    tag: {
      description: 'tag',
      control: { type: 'text' },
      table: {
        defaultValue: { summary: 'h4' },
      },
    },
    size: {
      description: 'size',
      control: { type: 'text' },
      table: {
        defaultValue: { summary: 'h1' },
      },
    },
  },
};

export const Default: Story<StoryTypography> = (args): any => {
  const { tag, text, size } = args;
  return html`<nge-typography tag="${tag}" size="${size}">${text}</nge-typography>`;
};

Default.args = {
  tag: 'h4',
  text: 'Example typography',
  size: TypographySizes.h1,
};
