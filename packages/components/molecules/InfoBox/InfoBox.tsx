import { Fragment, FunctionComponent, h } from 'preact';
import { signal } from '@preact/signals';

import { emitEvent } from '@utils/emitEvent/emitEvent';

import { InfoBoxEvents, InfoBoxProps } from './types';

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

  const handleButtonClick = (event: Event) => {
    emitEvent<InfoBoxEvents>({
      event,
      name: 'nge-info-box-button-click',
      value: { inputValue: inputValue.value, isCool: true },
    });
  };

  return (
    <Fragment>
      <span>{label}</span>
      <span className='main'>HEYOO</span>
      <input type='text' value={inputValue} onInput={handleInputChange} />
      <span>{inputValue}</span>
      <button onClick={handleButtonClick}>CUSTOM EVENT</button>
    </Fragment>
  );
};

export default InfoBox;
