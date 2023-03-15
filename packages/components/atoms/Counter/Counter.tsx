import { signal } from '@preact/signals';
import { h, Fragment } from 'preact';
import { CounterProps } from './types';

const count = signal(0);

function Counter({ title }: CounterProps) {
    return (
        <Fragment>
            <h2 className="main">{title}</h2>
            <p>Count: {count.value}</p>
            <button onClick={() => count.value++}>+</button>
            <button onClick={() => count.value--}>-</button>
        </Fragment>
    );
}

export default Counter;
