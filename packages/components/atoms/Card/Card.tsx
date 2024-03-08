import { Fragment, FunctionComponent, h } from 'preact';

/**
 * <nge-card>
 *
 *  Card component
 *
 * @element nge-card
 *
 * @example
 * <nge-card></nge-card>
 */

const Card: FunctionComponent = () => {
  return (
    <Fragment>
      <slot />
    </Fragment>
  );
};

export default Card;
