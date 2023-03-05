import { signal } from '@preact/signals';
import { h } from 'preact';

const count = signal(0);

function Counter() {
    return (
        <div>
            <h2>Counter from atoms</h2>
            <p>Count: {count.value}</p>
            <button onClick={() => count.value++}>+</button>
            <button onClick={() => count.value--}>-</button>
        </div>
    );
}

export default Counter;
