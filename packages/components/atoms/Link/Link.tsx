import { Fragment, h } from 'preact';

import { LinkProps } from '@atoms/Link/types';

import { CustomFunctionComponent } from '@types';

import '@no-gravity-elements/typography';
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

const Link: CustomFunctionComponent<LinkProps> = ({ href, size }: LinkProps) => {
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
