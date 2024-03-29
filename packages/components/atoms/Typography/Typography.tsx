import { Fragment, FunctionComponent, h } from 'preact';

import { TypographySizes } from '@no-gravity-elements/types';

import { TypographyProps } from './types';

/**
 * <nge-typography>
 *
 *  Typography component
 *
 * @element nge-typography
 *
 * @prop {h1|h2|h3|h4|h5|h6|h7|sp|p|lp|legal|button} [size] - Size of the text
 * @prop {string} [tag] - Tag that will be rendered inside the Shadow DOM
 *
 * @example
 * <nge-typography tag="h4">Typography</nge-typography>
 */

const Typography: FunctionComponent<TypographyProps> = ({ size, tag }: TypographyProps) => {
  const typographyTag = tag || 'span';

  const getTypographyNode = () => {
    return h(
      typographyTag,
      { class: (size && TypographySizes[size]) || TypographySizes.p },
      <slot />,
    );
  };

  return <Fragment>{getTypographyNode()}</Fragment>;
};

Typography.observedAttributes = ['tag', 'size'];

export default Typography;
