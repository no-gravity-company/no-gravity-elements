import { Story } from '@storybook/preact';
import { html } from 'lit-html';
import { TypographySizes } from 'packages/types';

import { LinkProps } from '@atoms/Link/types';

import '@no-gravity-elements/link';

export default {
  title: 'Link',
  component: 'nge-link',
  parameters: {
    webComponents: {
      tagName: 'nge-link',
    },
  },
  argTypes: {
    text: {
      description: 'Link text',
      control: { type: 'text' },
      table: {
        defaultValue: { summary: 'string' },
      },
    },
    size: {
      description: 'Text size',
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7', 'sp', 'p', 'lp', 'legal', 'button'],
    },
    href: {
      description: 'Link url',
      control: { type: 'text' },
      table: {
        defaultValue: { summary: '/' },
      },
    },
  },
};
type StoryLinkProps = LinkProps & { text: string };

export const Default: Story<StoryLinkProps> = (args): any => {
  const { text, href, size } = args;

  return html` <nge-link size="${size}" href="${href}">${text}</nge-link> `;
};

Default.args = {
  href: '/',
  text: 'Link',
  size: TypographySizes.h6,
};
