import { signal } from '@preact/signals';
import { Fragment, FunctionComponent, h } from 'preact';
import { useRef } from 'preact/hooks';
import { InfoBoxProps } from './types';

const inputValue = signal('');

const InfoBox: FunctionComponent<InfoBoxProps> = ({ label }: InfoBoxProps) => {
  const handleInputChange = (event: Event) => {
    const inputElement = event.target as HTMLInputElement;
    inputValue.value = inputElement.value;
  };

  console.log('wha');
  const a = 0;

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
      <button onClick={handleDivClick}></button>
    </Fragment>
  );
};

export default InfoBox;
