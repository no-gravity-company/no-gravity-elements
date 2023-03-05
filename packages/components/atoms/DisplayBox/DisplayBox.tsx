import { Fragment, FunctionComponent, h } from 'preact';
import { DisplayBoxProps } from './types';

const DisplayBox: FunctionComponent<DisplayBoxProps> = ({
    label = '',
    value = 0,
}: DisplayBoxProps) => {
    const handleClick = () => {
        console.log('clicked');
    };

    return (
        <div>
            <span>DISPLAY BOX</span>
            <span>{label}</span>
            <span>value</span>
            <span>{value}</span>
            <button onClick={handleClick}></button>
        </div>
    );
};

export default DisplayBox;
