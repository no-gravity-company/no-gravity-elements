import { h, Fragment, FunctionComponent } from 'preact';
import './Footer.modules.scss';

/**
 * <nge-footer>
 *
 * Footer component
 *
 * @element nge-footer
 *
 * @slot branding - Slot for branding content (e.g., logo or name)
 * @slot links - Slot for footer links
 * @slot social - Slot for social media icons
 *
 * @cssproperty --nge-footer-background-color - Background color of the footer (default: #fff).
 * @cssproperty --nge-footer-text-color - Text color of the footer (default: #000).
 * @cssproperty --nge-footer-padding - Padding around the footer content (default: 16px).
 * @cssproperty --nge-footer-gap - Gap between footer sections (default: 16px).
 * @cssproperty --nge-footer-link-color - Color of footer links (default: inherit).
 * @cssproperty --nge-footer-link-hover-color - Hover color of footer links (default: inherit).
 * @cssproperty --nge-footer-social-icon-size - Size of social media icons (default: 24px).
 * @cssproperty --nge-footer-powered-border-color - powered by container border top color (default: white).
 * 
 *
 * @example
 * <nge-footer>
 *   <div slot="branding">Brand</div>
 *   <div slot="links">Links</div>
 *   <div slot="social">Social Media</div>
 * </nge-footer>
 */

const Footer: FunctionComponent = () => {  return (
    <Fragment>
      <div className="nge-footer">
        <div className="branding">
          <slot name="branding" />
        </div>
        <div className="content">
          <slot name="content" />
        </div>
        <div className="social">
          <slot name="social" />
        </div>
      </div>
      <div className='powered'>Powered by: No Gravity</div>
    </Fragment>
  );
};

export default Footer;
