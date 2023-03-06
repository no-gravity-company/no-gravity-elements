import { signal } from '@preact/signals';
import { Fragment, FunctionComponent, h } from 'preact';
import { InfoBoxProps } from './types';

const inputValue = signal('');

const InfoBox: FunctionComponent<InfoBoxProps> = ({ label }: InfoBoxProps) => {
    const handleInputChange = (event: Event) => {
        const inputElement = event.target as HTMLInputElement;
        inputValue.value = inputElement.value;
    };

    const handleDivClick = () => {
        const event = new CustomEvent('buttonClick', {
            detail: 'Event detail',
        });
        window.dispatchEvent(event);
    };

    return (
        <div>
            <span>HEY</span>
            <span>HO</span>
            <span>{label}</span>
            <input type="text" value={inputValue} onInput={handleInputChange} />
            <span>{inputValue}</span>
            <button onClick={handleDivClick}></button>
        </div>
    );
};

export default InfoBox;
