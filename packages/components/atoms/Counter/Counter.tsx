import { Fragment, h } from 'preact';
import { signal } from '@preact/signals';

import { CounterProps } from '@atoms/Counter/types';

const INITIAL_COUNT = 0;

const count = signal(INITIAL_COUNT);

/**
 * <nge-counter>
 *
 *  The super counter component
 *
 * @element nge-counter
 * @slot header - Header slot content.
 * @cssprop --primary-color - The primary color of the element.
 *
 * @fires my-event - Fired when the element is clicked.
 *
 * @prop {string} [label] - The label of the element.
 *
 * @example
 * <nge-counter label="Hello world">
 *   <div slot="header">Header content</div>
 *   <div>Default content</div>
 * </nge-counter>
 */
function Counter({ title }: CounterProps) {
  return (
    <Fragment>
      <h2 className='main'>{title}</h2>
      <p>Count: {count.value}</p>
      <button onClick={() => count.value++}>+</button>
      <button onClick={() => count.value--}>-</button>
    </Fragment>
  );
}

export default Counter;
