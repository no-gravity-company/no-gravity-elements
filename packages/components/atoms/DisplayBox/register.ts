import register from 'preact-custom-element';
import DisplayBox from './DisplayBox';

const alreadyDefined = (tagName: string) =>
    customElements.get(tagName) !== undefined;
if (!alreadyDefined('nge-display-box')) {
    register(DisplayBox, 'nge-display-box', ['label'], { shadow: true });
}
