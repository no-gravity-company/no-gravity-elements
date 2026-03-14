import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';
import { StringBoolean } from '@no-gravity-elements/types';
import { ModalProps } from './types';

type CustomArgs = ModalProps & { content: string; footerContent: string };

const meta: Meta<CustomArgs> = {
  title: 'molecules/Modal',
  component: 'nge-modal',
  parameters: {
    webComponents: {
      tagName: 'nge-modal',
    },
  },
  argTypes: {
    open: {
      description: 'Determines if the modal is visible',
      control: { type: 'boolean' },
      table: {
        defaultValue: { summary: false },
      },
    },
    title: {
      description: 'Title of the modal',
      control: { type: 'text' },
    },
    size: {
      description: 'Size of the modal',
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      table: {
        defaultValue: { summary: 'medium' },
      },
    },
    backdropDisabled: {
      description: 'Disables backdrop click to close',
      control: { type: 'boolean' },
      table: {
        defaultValue: { summary: false },
      },
    },
    closeButtonDisabled: {
      description: 'Disables the close button',
      control: { type: 'boolean' },
      table: {
        defaultValue: { summary: false },
      },
    },
    fullHeight: {
      description: 'Makes the modal full height',
      control: { type: 'boolean' },
      table: {
        defaultValue: { summary: false },
      },
    },
    content: {
      description: 'Content of the modal',
      control: { type: 'text' },
    },
    footerContent: {
      description: 'Footer content of the modal',
      control: { type: 'text' },
    },
  },
  render: ({ open, title, size, backdropDisabled, closeButtonDisabled, fullHeight, content, footerContent }) => {
    return html`
      <nge-modal
        .open=${open ? StringBoolean.TRUE : StringBoolean.FALSE}
        title=${title || undefined}
        size=${size}
        .backdropDisabled=${backdropDisabled ? StringBoolean.TRUE : StringBoolean.FALSE}
        .closeButtonDisabled=${closeButtonDisabled ? StringBoolean.TRUE : StringBoolean.FALSE}
        .fullHeight=${fullHeight ? StringBoolean.TRUE : StringBoolean.FALSE}
      >
        <div slot="content">${content || 'Default modal content'}</div>
        <div slot="footer">${footerContent || ''}</div>
      </nge-modal>
    `;
  },
};

export default meta;
type Story = StoryObj<CustomArgs>;

export const Default: Story = {
  args: {
    open: StringBoolean.FALSE,
    title: '',
    size: 'medium',
    backdropDisabled: StringBoolean.FALSE,
    closeButtonDisabled: StringBoolean.FALSE,
    fullHeight: StringBoolean.FALSE,
    content: 'This is the default modal content.',
    footerContent: '',
  },
};

export const OpenSmall: Story = {
  args: {
    open: StringBoolean.TRUE,
    title: 'Small Modal',
    size: 'small',
    backdropDisabled: StringBoolean.FALSE,
    closeButtonDisabled: StringBoolean.FALSE,
    fullHeight: StringBoolean.FALSE,
    content: 'This is a small modal.',
    footerContent: '',
  },
};

export const OpenMediumWithTitle: Story = {
  args: {
    open: StringBoolean.TRUE,
    title: 'Medium Modal',
    size: 'medium',
    backdropDisabled: StringBoolean.FALSE,
    closeButtonDisabled: StringBoolean.FALSE,
    fullHeight: StringBoolean.FALSE,
    content: 'This is a medium modal with a title.',
    footerContent: '',
  },
};

export const OpenLargeWithFooter: Story = {
  args: {
    open: StringBoolean.TRUE,
    title: 'Large Modal',
    size: 'large',
    backdropDisabled: StringBoolean.FALSE,
    closeButtonDisabled: StringBoolean.FALSE,
    fullHeight: StringBoolean.FALSE,
    content: 'This is a large modal with footer content.',
    footerContent: '<button>Cancel</button><button>Save</button>',
  },
};

export const DisabledBackdrop: Story = {
  args: {
    open: StringBoolean.TRUE,
    title: 'Backdrop Disabled Modal',
    size: 'medium',
    backdropDisabled: StringBoolean.TRUE,
    closeButtonDisabled: StringBoolean.FALSE,
    fullHeight: StringBoolean.FALSE,
    content: 'Backdrop click is disabled for this modal.',
    footerContent: '',
  },
};

export const FullHeightModal: Story = {
  args: {
    open: StringBoolean.TRUE,
    title: 'Full Height Modal',
    size: 'medium',
    backdropDisabled: StringBoolean.FALSE,
    closeButtonDisabled: StringBoolean.FALSE,
    fullHeight: StringBoolean.TRUE,
    content: 'This modal takes up the full height.',
    footerContent: '',
  },
};