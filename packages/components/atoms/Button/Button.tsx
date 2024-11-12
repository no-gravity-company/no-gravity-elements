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
 * @prop {ButtonTypes} [type] - Button type
 * @prop {IconNames} [icon] - Button Icon name
 * @prop {boolean} [disabled] - Toggles disabled state
 *
 * @example
 * <nge-button type="primary">Button</nge-button>
 */

const Button: FunctionComponent<ButtonProps> = ({ value, type, icon, disabled = StringBoolean.FALSE }: ButtonProps) => {
  const isDisabled = disabled === StringBoolean.TRUE;
  const buttonClass = classNames((type && ButtonTypes[type]) || ButtonTypes.primary, 'nge-button', {
    disabled: isDisabled,
  });
  console.log(icon)
  return (
    <Fragment>
      <button className={buttonClass} disabled={isDisabled} aria-disabled={isDisabled}>
        {icon && <nge-icon name={icon} size={IconSizes.small} />}
        <span>{value}</span>
      </button>
    </Fragment>
  );
};

Button.observedAttributes = ['type', 'icon', 'disabled'];
Button.useShadowDom = false;

export default Button;
