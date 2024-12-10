import { Fragment, FunctionComponent, h } from 'preact';

import { ButtonTypes, IconNames, IconSizes, StringBoolean } from '@no-gravity-elements/types';

import { ButtonProps } from './types';
import classNames from 'classnames';
import './Button.modules.scss';

/**
 * <nge-button>
 *
 *  Button component
 *
 * @element nge-button
 *
 * @prop {ButtonTypes} [variant] - Button type
 * @prop {IconNames} [icon] - Button Icon name
 * @prop {boolean} [disabled] - Toggles disabled state
 *
 * @example
 * <nge-button variant="primary" value="Button"></nge-button>
 */

const Button: FunctionComponent<ButtonProps> = ({ value, variant, icon, disabled = StringBoolean.FALSE, type = 'submit' }: ButtonProps) => {
  const isDisabled = disabled === StringBoolean.TRUE;
  const buttonClass = classNames((variant && ButtonTypes[variant]) || ButtonTypes.primary, 'nge-button', {
    disabled: isDisabled,
  });
  return (
    <Fragment>
      <button type={type} aria-label={value} className={buttonClass} disabled={isDisabled} aria-disabled={isDisabled}>
        {icon && <nge-icon name={icon} size={IconSizes.small} />}
        <span>{value}</span>
      </button>
    </Fragment>
  );
};

Button.observedAttributes = ['type', 'icon', 'disabled', 'value'];
Button.useShadowDom = false;

export default Button;
