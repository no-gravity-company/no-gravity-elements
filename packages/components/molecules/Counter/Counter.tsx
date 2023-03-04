import { signal } from '@preact/signals';
import { h } from 'preact';
import register from 'preact-custom-element';

const count = signal(0);

function Counter() {
  return (
    <div>
      <h2>Counter</h2>
      <p>Count: {count.value}</p>
      <button onClick={() => count.value++}>+</button>
      <button onClick={() => count.value--}>-</button>
    </div>
  );
}

register(Counter, 'my-counter', [], { shadow: true });
