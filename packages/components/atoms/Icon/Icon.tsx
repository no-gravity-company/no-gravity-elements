import { Fragment, FunctionComponent, h } from 'preact';
import useFetchSVG from '@hooks/useFetchSVG';
import { IconProps } from './types';

/**
 * <nge-icon>
 *
 *  Icon component
 *
 * @element nge-icon
 *
 * @prop {'string'} [name] - Icon name
 * @prop {'extra-small'|'small'|'medium'|'regular'|'large'|'extra-large'} [size] - Icon size
 *
 * @example
 * <nge-icon name="cross"></nge-icon>
 */

const Icon: FunctionComponent<IconProps> = ({ name, size }: IconProps) => {
  const svgComponent = useFetchSVG(name);

  return (
    <Fragment>{svgComponent && <span className={size || 'regular'}>{svgComponent}</span>}</Fragment>
  );
};

Icon.observedAttributes = ['size', 'name'];

export default Icon;
