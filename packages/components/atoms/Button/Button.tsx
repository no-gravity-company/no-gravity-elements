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
 *
 * @cssproperty --nge-button-border-radius - Border radius for buttons. Default is calculated using a base unit of 0.75.
 * @cssproperty --nge-button-padding - Padding inside buttons. Default is calculated using base units of 1.25 and 2.
 * @cssproperty --nge-button-transition - Transition for background and color changes in buttons.
 * @cssproperty --nge-button-border - Border style for buttons. Default is `none`.
 * @cssproperty --nge-button-width - Width of the button. Default is `auto`.
 * @cssproperty --nge-button-font-size - Font size for button text. Default is 16px.
 * @cssproperty --text-color - text and icon color of the button
 *
 * @example
 * <nge-button variant="primary" value="Button"></nge-button>
 */

const Button: FunctionComponent<ButtonProps> = ({
  value,
  variant,
  icon,
  disabled = StringBoolean.FALSE,
  loading = StringBoolean.FALSE,
  type = 'submit',
}: ButtonProps) => {
  const isDisabled = disabled === StringBoolean.TRUE /*|| loading === StringBoolean.TRUE*/;
  const isLoading = loading === StringBoolean.TRUE;

  const buttonClass = classNames(
    (variant && ButtonTypes[variant]) || ButtonTypes.primary,
    'nge-button',
    { disabled: isDisabled, loading: isLoading },
  );

  return (
    <Fragment>
      <button
        type={type}
        aria-label={value}
        className={buttonClass}
        disabled={isDisabled}
        aria-disabled={isDisabled}
      >
        <nge-icon className='loading-icon' name={IconNames.bouncingCircles} size={IconSizes.medium} />
        {icon && <nge-icon className='content' name={icon} size={IconSizes.small} />}
        <span className='content'>{value}</span>
      </button>
    </Fragment>
  );
};

Button.observedAttributes = ['type', 'icon', 'disabled', 'value', 'loading', 'variant'];
Button.useShadowDom = false;

export default Button;
