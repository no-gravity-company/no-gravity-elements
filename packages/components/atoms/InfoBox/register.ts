import register from 'preact-custom-element';
import InfoBox from './InfoBox';

const alreadyDefined = (tagName: string) =>
    customElements.get(tagName) !== undefined;
if (!alreadyDefined('nge-info-box')) {
    register(InfoBox, 'nge-info-box', [], { shadow: true });
}
