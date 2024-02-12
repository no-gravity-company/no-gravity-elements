import { Fragment, h } from 'preact';
import { CustomFunctionComponent } from 'packages/types';

import { ButtonProps } from '@atoms/Button/types';

// import { useCssStyle } from 'packages/hooks/useCssStyle';

/**
 * <nge-button>
 *
 *  Button component
 *
 * @element nge-button
 *
 * @fires onClick - Fired when the element is clicked.
 *
 * @prop {string} [text] - The label of the element.
 * @prop {'primary' | 'secondary'} [type] - Use primary button styles.
 *
 * @example
 * <nge-button text="Click me!" />
 */

const Button: CustomFunctionComponent<ButtonProps> = ({ text, onClick, type }: ButtonProps) => {
  //useCssStyle('nge-button', classes);
  const buttonClass = `custom-button${type ? ` ${type}` : ' primary'}`;
  return (
    <Fragment>
      <button class={buttonClass} onClick={onClick}>
        {text}
      </button>
    </Fragment>
  );
};

Button.observedAttributes = ['text', 'type'];

export default Button;
