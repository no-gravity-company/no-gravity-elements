import { Fragment, FunctionComponent, h } from 'preact';

import { ButtonTypes, IconSizes, TypographySizes } from '@no-gravity-elements/types';

import { ButtonProps } from './types';
/**
 * <nge-button>
 *
 *  Button component
 *
 * @element nge-button
 *
 * @prop {'primary'|'secondary'|'destructive'|'outline'|'ghost'|'disabled'} [type] - Button type
 * @prop {'string'} [icon] - Button Icon name
 *
 * @example
 * <nge-button type="primary">Button</nge-button>
 */

const Button: FunctionComponent<ButtonProps> = ({ type, icon }: ButtonProps) => {
  const buttonClass = (type && ButtonTypes[type]) || ButtonTypes.primary;

  return (
    <Fragment>
      <button className={buttonClass} disabled={type === ButtonTypes.disabled}>
        {icon && <nge-icon name={icon} size={IconSizes.small} />}
        <nge-typography size={TypographySizes.button}>
          <slot />
        </nge-typography>
      </button>
    </Fragment>
  );
};

Button.observedAttributes = ['type', 'icon'];

export default Button;
