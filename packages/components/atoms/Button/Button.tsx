import { Fragment, FunctionComponent, h } from 'preact';
import { ButtonTypes, IconNames, IconSizes, StringBoolean } from '@no-gravity-elements/types';
import { ButtonProps } from './types';
import classNames from 'classnames';

import './Button.modules.scss';

/**
 * <nge-button>
 *
 * Button component with loading state
 *
 * @element nge-button
 *
 * @prop {ButtonTypes} [variant] - Button type
 * @prop {IconNames} [icon] - Button Icon name
 * @prop {boolean} [disabled] - Toggles disabled state
 * @prop {boolean} [loading] - Toggles loading state
 * @prop {string} [value] - Button text
 * @prop {string} [href] - URL to navigate to when the button is rendered as a link
 * @prop {string} [target] - Specifies where to open the linked document (used with href)
 * @prop {string} [rel] - Specifies the relationship between the current document and the linked document (used with href)
 * @prop {'left'|'right'} [iconside] - Specifies the side of the icon
 * @prop {boolean} [fullwidth] - Toggles full width state
 *
 * @cssproperty --nge-button-border-radius - Border radius for buttons. Default 6px.
 * @cssproperty --nge-button-padding - Padding inside buttons. Default 10px 16px.
 * @cssproperty --nge-button-transition - Transition for background and color changes in buttons. Default background-color 0.2s ease, color 0.2s ease
 * @cssproperty --nge-button-border - Border style for buttons. Default is `none`.
 * @cssproperty --nge-button-width - Width of the button. Default is `auto`.
 * @cssproperty --nge-button-font-size - Font size for button text. Default is 16px.
 * @cssproperty --text-color - text and icon color of the button
 * @cssproperty --nge-button-gap - Gap between the icon and the text. Default is px.
 * @cssproperty --nge-button-justify-content - Justify content for the button. Default is `space-between`.
 * 
 * @example
 * <nge-button variant="primary" value="Button"></nge-button>
 * @example
 * <nge-button href="https://example.com" target="_blank" rel="noopener" value="Link"></nge-button>
 */

const Button: FunctionComponent<ButtonProps> = ({
  value,
  variant,
  icon,
  disabled = StringBoolean.FALSE,
  loading = StringBoolean.FALSE,
  type = 'submit',
  href,
  target,
  rel,
  iconside = 'left',
  fullwidth = StringBoolean.FALSE,
}: ButtonProps) => {
  const isDisabled = disabled === StringBoolean.TRUE || loading === StringBoolean.TRUE;
  const isLoading = loading === StringBoolean.TRUE;
  const isFullWidth = fullwidth === StringBoolean.TRUE;

  const buttonClass = classNames(
    (variant && ButtonTypes[variant]) || ButtonTypes.primary,
    'nge-button',
    { disabled: isDisabled, loading: isLoading, 'full-width': isFullWidth }
  );

  const content = (
    <>
      {isLoading && <nge-icon className='loading-icon' name={IconNames.bouncingCircles} size={IconSizes.medium} />}
      {icon && iconside === 'left' &&  <nge-icon className='button-left-icon' name={icon} size={IconSizes.small} />}
      <span className='button-text'>{value}</span>
      {icon && iconside === 'right' && <nge-icon className='button-right-icon' name={icon} size={IconSizes.small} />}
    </>
  );

  return (
    <Fragment>
      {href ? (
        <a
          href={href}
          target={target}
          rel={rel}
          className={buttonClass}
          aria-label={value}
          aria-disabled={isDisabled ? "true" : undefined}
        >
          {content}
        </a>
      ) : (
        <button
          type={type}
          aria-label={value}
          className={buttonClass}
          disabled={isDisabled}
          aria-disabled={isDisabled}
        >
          {content}
        </button>
      )}
    </Fragment>
  );
};

Button.observedAttributes = ['type', 'icon', 'disabled', 'value', 'loading', 'variant', 'href', 'target', 'rel', 'fullwidth', 'iconside'];
Button.useShadowDom = false;

export default Button;
