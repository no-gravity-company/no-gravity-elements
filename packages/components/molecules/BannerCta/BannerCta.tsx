import { h, FunctionComponent, Fragment } from 'preact';
import './BannerCta.modules.scss';

/**
 * <nge-banner-cta>
 *
 * A web component for a customizable call-to-action section.
 *
 * @element nge-banner-cta
 *
 * @slot title - Slot for the call-to-action title.
 * @slot message - Slot for the call-to-action message.
 * @slot button - Slot for the button element or other actions.
 *
 * @cssproperty --space-xl - Padding for the background container (default: 2rem).
 * @cssproperty --text-color-50 - Text color for the title and message.
 * @cssproperty --section-padding - Padding for the call-to-action section (default: 2rem).
 * @cssproperty --space-s - Gap between title and message (default: 1rem).
 * @cssproperty --space-l - Padding for small screen sizes.
 * @cssproperty --space-m - Margin for the button on small screens.
 *
 * @example
 * <nge-banner-cta>
 *   <h5 slot="title">Your Custom Title</h5>
 *   <p slot="message">Your custom call-to-action message.</p>
 *   <nge-button slot="button" value="Click Me"></nge-button>
 * </nge-banner-cta>
 */
const BannerCta: FunctionComponent = () => {
  return (
    <Fragment>
      <div className="bg-cta">
        <div className="main-call">
          <h5 id="cta-title">
            <slot name="title">Default Title</slot>
          </h5>
          <p>
            <slot name="message">Default call-to-action message.</slot>
          </p>
        </div>
        <slot name="button" />
      </div>
    </Fragment>
  );
};

export default BannerCta;
