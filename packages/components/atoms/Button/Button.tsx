import { Fragment, FunctionComponent, h } from 'preact';

import { ButtonProps, ButtonTypes } from '@atoms/Button/types';

import { TypographySizes } from '@types';

import '@no-gravity-elements/typography';
/**
 * <nge-button>
 *
 *  Button component
 *
 * @element nge-button
 *
 * @prop {'primary'|'secondary'|'destructive'|'outline'|'ghost'|'disabled'} [type] - Button type
 *
 * @example
 * <nge-button type="primary">Button</nge-button>
 */

const Button: FunctionComponent<ButtonProps> = ({ type }: ButtonProps) => {
  const buttonClass = (type && ButtonTypes[type]) || ButtonTypes.primary;
  return (
    <Fragment>
      <button className={buttonClass} disabled={type === ButtonTypes.disabled}>
        <nge-typography size={TypographySizes.button}>
          <slot />
        </nge-typography>
      </button>
    </Fragment>
  );
};

Button.observedAttributes = ['type'];

export default Button;
