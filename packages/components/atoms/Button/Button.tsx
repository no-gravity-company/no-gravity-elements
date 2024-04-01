import { Fragment, FunctionComponent, h } from 'preact';

import { emitEvent } from '@utils/emitEvent/emitCustomEvent';

import { ButtonTypes, IconSizes, TypographySizes } from '@no-gravity-elements/types';

import { ButtonEvents, ButtonProps } from './types';
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

  const handleClick = (event: Event) => {
    emitEvent<ButtonEvents>(event, 'onClick', type);
  };

  return (
    <Fragment>
      <button
        className={buttonClass}
        disabled={type === ButtonTypes.disabled}
        onClick={handleClick}
      >
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
