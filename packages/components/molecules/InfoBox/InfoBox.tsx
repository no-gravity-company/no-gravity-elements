import { Fragment, FunctionComponent, h } from 'preact';
import { signal } from '@preact/signals';

import { InfoBoxProps } from '@molecules/InfoBox/types';

const inputValue = signal('');

/**
 * @element nge-info-box
 * @slot - Default slot content.
 * @slot header - Header slot content.
 * @cssprop --primary-color - The primary color of the element.
 *
 * @fires my-event - Fired when the element is clicked.
 *
 * @prop {string} [label] - The label of the element.
 *
 * @example
 * <nge-info-box label="Hello world">
 *   <div slot="header">Header content</div>
 *   <div>Default content</div>
 * </nge-info-box>
 */
const InfoBox: FunctionComponent<InfoBoxProps> = ({ label }: InfoBoxProps) => {
  const handleInputChange = (event: Event) => {
    const inputElement = event.target as HTMLInputElement;
    inputValue.value = inputElement.value;
  };

  const handleDivClick = (event: Event) => {
    // TODO extract to function in tools repo -> publish(eventName, payload, element)
    if (event && event.target) {
      const customEvent = new CustomEvent('ButtonClick', {
        detail: {
          'nge-event': true,
        },
        // TODO try to consume it without those attrs (maybe they are only needed if we want to cacth them with a listener)
        bubbles: true,
        composed: true,
      });
      event.target.dispatchEvent(customEvent);
    }
  };

  return (
    <Fragment>
      <span className='main'>HEY</span>
      <span>{label}</span>
      <input type='text' value={inputValue} onInput={handleInputChange} />
      <span>{inputValue}</span>
      <button onClick={handleDivClick} />
    </Fragment>
  );
};

export default InfoBox;
