import { signal } from '@preact/signals';
import { h, Fragment } from 'preact';

const count = signal(0);

function Counter() {
    return (
        <Fragment>
            <h2 className="main">Counter from molecules</h2>
            <p>Count: {count.value}</p>
            <button onClick={() => count.value++}>+</button>
            <button onClick={() => count.value--}>-</button>
        </Fragment>
    );
}

export default Counter;
