import register from 'preact-custom-element';
import Counter from '@atoms/Counter/Counter';

const alreadyDefined = (tagName: string) =>
    customElements.get(tagName) !== undefined;
if (!alreadyDefined('my-counter')) {
    register(Counter, 'my-counter', [], { shadow: true });
}
