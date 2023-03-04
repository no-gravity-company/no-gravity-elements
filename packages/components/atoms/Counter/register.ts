import register from 'preact-custom-element';
import Counter from './Counter';

console.log(Counter);
register(Counter, 'my-counter', [], { shadow: true });
