import register from 'preact-custom-element';
import Counter from './Counter';

register(Counter, 'my-counter', [], { shadow: true });
