import { Fragment, FunctionComponent, h } from 'preact';

import { ButtonTypes, IconSizes } from '@no-gravity-elements/types';

import { ButtonProps } from './types';
import classNames from 'classnames';
/**
 * <nge-button>
 *
 *  Button component
 *
 * @element nge-button
 *
 * @prop {'primary'|'disruptive'|'destructive'|'outline'|'ghost'} [type] - Button type
 * @prop {string} [icon] - Button Icon name
 * @prop {boolean} [disabled] - Toggles disabled state
 *
 * @example
 * <nge-button type="primary">Button</nge-button>
 */

const Button: FunctionComponent<ButtonProps> = ({ type, icon, disabled = false }: ButtonProps) => {
  const buttonClass = classNames((type && ButtonTypes[type]) || ButtonTypes.primary, 'nge-button', { disabled });
  console.log({disabled})
  return (
    <Fragment>
      {/* <button className={buttonClass} disabled={disabled}>
        {icon && <nge-icon name={icon} size={IconSizes.small} />}
        <nge-typography size={TypographySizes.button}>
          <slot />
        </nge-typography>
      </button> */}
      <div className={buttonClass}>
        <slot />
      </div>
    </Fragment>
  );
};

Button.observedAttributes = ['type', 'icon', 'disabled'];

export default Button;
