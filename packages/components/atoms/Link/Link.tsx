import { Fragment, FunctionComponent, h } from 'preact';

import { LinkProps } from './types';

/**
 * <nge-link>
 *
 *  Link component
 *
 * @element nge-link
 *
 * @prop {'string} [href] - link url
 * @prop {h1|h2|h3|h4|h5|h6|h7|sp|p|lp|legal|button} [size] - Size of the text
 *
 * @example
 * <nge-link href="/">Link</nge-link>
 */

const Link: FunctionComponent<LinkProps> = ({ href, size }: LinkProps) => {
  return (
    <Fragment>
      <a href={href}>
        <nge-typography size={size}>
          <slot />
        </nge-typography>
      </a>
    </Fragment>
  );
};

Link.observedAttributes = ['size', 'href'];

export default Link;
