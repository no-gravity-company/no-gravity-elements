import { Fragment, h } from 'preact';
import { CustomFunctionComponent } from 'packages/types';

import { ButtonProps } from '@atoms/Button/types';

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
 * @prop {event} [onClick] - Event trigger when clicking the button.
 * @prop {boolean} [primary] - Use primary button styles.
 * @prop {string} [className] - Classes applied to the button.
 * @prop {string} [style] - Button styles.
 *
 * @example
 * <nge-button text="Click me!" />
 */

const Button: CustomFunctionComponent<ButtonProps> = ({
  text,
  onClick,
  type,
  className,
  style,
}: ButtonProps) => {
  const buttonClass = `custom-button${type ? ` ${type}` : ' primary'}${
    className ? ` ${className}` : ''
  }`;
  const buttonStyle = style || '';
  return (
    <Fragment>
      <button class={buttonClass} style={buttonStyle} onClick={onClick}>
        {text}
      </button>
    </Fragment>
  );
};

Button.observedAttributes = ['text', 'type', 'className', 'style'];

export default Button;
