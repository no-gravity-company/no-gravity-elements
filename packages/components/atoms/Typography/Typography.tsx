import { Fragment, h, VNode } from 'preact';

import { TypographyProps } from '@atoms/Typography/types';

import { CustomFunctionComponent, TypographySizes } from '@types';

/**
 * <nge-typography>
 *
 *  Typography component
 *
 * @element nge-typography
 *
 * @prop {h1|h2|h3|h4|h5|h6|h7|sp|p|lp|legal} [size] - Sixe of the text.
 * @prop {string} [tag] - Tag that will be rendered inside the Shadow DOM
 *
 * @example
 * <nge-typography tag="h4">Example</nge-typography>
 */

const Typography: CustomFunctionComponent<TypographyProps> = ({ size, tag }: TypographyProps) => {
  const typographyTag = tag || 'span';

  const getTypographyNode = (): VNode => {
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
