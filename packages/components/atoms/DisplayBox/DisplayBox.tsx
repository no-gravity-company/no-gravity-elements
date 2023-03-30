import { FunctionComponent, h } from 'preact';

import { DisplayBoxProps } from '@atoms/DisplayBox/types';

const INITIAL_VALUE = 0;

const DisplayBox: FunctionComponent<DisplayBoxProps> = ({
  label = '',
  value = INITIAL_VALUE,
}: DisplayBoxProps) => {
  const handleClick = () => {
    // eslint-disable-next-line no-console
    console.log('clicked');
  };

  return (
    <div>
      <span>DISPLAY BOX</span>
      <span>{label}</span>
      <span>value</span>
      <span>{value}</span>
      <button onClick={handleClick} />
    </div>
  );
};

export default DisplayBox;
