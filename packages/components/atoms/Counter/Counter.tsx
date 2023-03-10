import { signal } from '@preact/signals';
import { h } from 'preact';
import { CounterProps } from './types';

const count = signal(0);

function Counter({ title }: CounterProps) {
    return (
        <div>
            <h2>{title}</h2>
            <p>Count: {count.value}</p>
            <button onClick={() => count.value++}>+</button>
            <button onClick={() => count.value--}>-</button>
        </div>
    );
}

export default Counter;
