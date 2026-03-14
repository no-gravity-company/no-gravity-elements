import { Fragment, FunctionComponent, h } from 'preact';
import { StringBoolean } from '@no-gravity-elements/types';
import { ModalProps } from './types';
import classNames from 'classnames';

import './Modal.modules.scss';

/**
 * <nge-modal>
 *
 * Modal component with customizable properties
 *
 * @element nge-modal
 *
 * @prop {StringBoolean} [open] - Determines if the modal is visible
 * @prop {string} [title] - Title of the modal
 * @prop {'small'|'medium'|'large'} [size] - Size of the modal
 * @prop {StringBoolean} [backdropDisabled] - Disables backdrop click to close
 * @prop {StringBoolean} [closeButtonDisabled] - Disables the close button
 * @prop {StringBoolean} [fullHeight] - Makes the modal full height
 *
 * @cssproperty --nge-modal-backdrop-bg - Background color of the backdrop. Default rgba(0, 0, 0, 0.5).
 * @cssproperty --nge-modal-bg - Background color of the modal. Default #fff.
 * @cssproperty --nge-modal-border-radius - Border radius of the modal. Default 8px.
 * @cssproperty --nge-modal-padding - Padding inside the modal. Default 20px.
 * @cssproperty --nge-modal-max-width-small - Max width for small modal. Default 400px.
 * @cssproperty --nge-modal-max-width-medium - Max width for medium modal. Default 600px.
 * @cssproperty --nge-modal-max-width-large - Max width for large modal. Default 800px.
 * @cssproperty --nge-modal-z-index - Z-index of the modal. Default 1000.
 * @cssproperty --nge-modal-backdrop-z-index - Z-index of the backdrop. Default 999.
 *
 * @example
 * <nge-modal open="true" title="My Modal" size="medium">
 *   <div slot="content">This is the modal content</div>
 * </nge-modal>
 */

const Modal: FunctionComponent<ModalProps> = ({
  open = StringBoolean.FALSE,
  title,
  size = 'medium',
  backdropDisabled = StringBoolean.FALSE,
  closeButtonDisabled = StringBoolean.FALSE,
  fullHeight = StringBoolean.FALSE,
}: ModalProps) => {
  const isOpen = open === StringBoolean.TRUE;
  const isBackdropDisabled = backdropDisabled === StringBoolean.TRUE;
  const isCloseButtonDisabled = closeButtonDisabled === StringBoolean.TRUE;
  const isFullHeight = fullHeight === StringBoolean.TRUE;

  const modalClass = classNames('nge-modal', size, { 'full-height': isFullHeight });
  const backdropClass = classNames('nge-modal-backdrop', { hidden: !isOpen });
  const modalContentClass = classNames('nge-modal-content', { hidden: !isOpen });

  const handleBackdropClick = (event: MouseEvent) => {
    if (!isBackdropDisabled && (event.target as HTMLElement).classList.contains('nge-modal-backdrop')) {
      dispatchEvent(new CustomEvent('onClose', { detail: { source: 'backdrop' } }));
    }
  };

  const handleCloseButtonClick = () => {
    dispatchEvent(new CustomEvent('onClose', { detail: { source: 'button' } }));
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && isOpen) {
      dispatchEvent(new CustomEvent('onClose', { detail: { source: 'escape' } }));
    }
  };

  if (typeof window !== 'undefined') {
    window.addEventListener('keydown', handleKeyDown);
  }

  return (
    <Fragment>
      <div class={backdropClass} onClick={handleBackdropClick}></div>
      <div class={modalContentClass}>
        <div class={modalClass}>
          {title && (
            <div class="nge-modal-header">
              <h2>{title}</h2>
              {!isCloseButtonDisabled && (
                <button class="nge-modal-close-button" onClick={handleCloseButtonClick}>
                  ✕
                </button>
              )}
            </div>
          )}
          {!title && !isCloseButtonDisabled && (
            <button class="nge-modal-close-button no-title" onClick={handleCloseButtonClick}>
              ✕
            </button>
          )}
          <div class="nge-modal-body">
            <slot name="content" />
          </div>
          <div class="nge-modal-footer">
            <slot name="footer" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Modal.observedAttributes = ['open', 'title', 'size', 'backdropDisabled', 'closeButtonDisabled', 'fullHeight'];

export default Modal;