import { Fragment, FunctionComponent, h } from 'preact';

import { IconProps } from '@atoms/Icon/types';

import { useFetchSVG } from '@hooks/useFetchSVG';

import { IconSizes } from '@types';

const Icon: FunctionComponent<IconProps> = ({ name, size }: IconProps) => {
  const svgComponent = useFetchSVG(name);

  return (
    <Fragment>
      {svgComponent && <span className={size || IconSizes.regular}>{svgComponent}</span>}
    </Fragment>
  );
};

Icon.observedAttributes = ['size', 'name'];

export default Icon;
