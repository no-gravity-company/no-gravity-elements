import register from 'preact-custom-element';
import Counter from '@molecules/Counter/Counter';

const alreadyDefined = (tagName: string) =>
    customElements.get(tagName) !== undefined;
if (!alreadyDefined('your-counter')) {
    register(Counter, 'your-counter', [], { shadow: true });
}
