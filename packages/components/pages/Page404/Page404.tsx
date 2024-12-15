import { h, FunctionComponent, Fragment } from 'preact';
import './Page404.modules.scss';

/**
 * <nge-page-404>
 *
 * A web component for a customizable 404 error page.
 *
 * @element nge-page-404
 *
 * @slot title - Slot for the error title (default: "404 - Page Not Found").
 * @slot message - Slot for the error message (default: "The page you are looking for does not exist.").
 * @slot actions - Slot for action buttons or links (e.g., "Go Home").
 *
 * @cssproperty --nge-page-404-background-color - Background color of the page (default: #f7f7f7).
 * @cssproperty --nge-page-404-text-color - Text color of the text (default: #333).
 * @cssproperty --nge-page-404-title-color - Color of the title (default: #ff6f61).
 * @cssproperty --nge-page-404-padding - Padding around the content (default: 20px).
 * @cssproperty --nge-page-404-gap - Gap between elements (default: 16px).
 *
 * @example
 * <nge-page-404>
 *   <h1 slot="title">Oops! Page Not Found</h1>
 *   <p slot="message">We can't seem to find the page you're looking for.</p>
 *   <div slot="actions">
 *     <a href="/">Go Back Home</a>
 *   </div>
 * </nge-page-404>
 */
const Page404: FunctionComponent = () => {
  return (
    <Fragment>
      <div className="title">
        <slot name="title">404 - Page Not Found</slot>
      </div>
      <div className="message">
        <slot name="message">
          The page you are looking for does not exist.
        </slot>
      </div>
      <div className="actions">
        <slot name="actions">
          <a href="/" className="home-link">Go Home</a>
        </slot>
      </div>
    </Fragment>
  );
};

export default Page404;
