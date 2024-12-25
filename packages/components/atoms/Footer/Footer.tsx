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

const Footer: FunctionComponent = () => {
  return (
    <Fragment>
      <div className='nge-footer'>
        <div className='branding'>
          <slot name='branding' />
        </div>
        <div className='content'>
          <slot name='content' />
        </div>
        <div className='social'>
          <slot name='social' />
        </div>
      </div>
      <div className='powered'>
        Powered by:
        <a href='https://www.no-gravity.es'>
          <svg
            x='0px'
            y='0px'
            viewBox='0 0 1080 389.2'
            style='enable-background:new 0 0 1080 389.2;'
          >
            <g>
              <g>
                <path
                  d='M139.6,147.9c-13.2-1-25.7,3.5-35.4,12.4c-9.5,8.8-14.9,21.3-14.9,34.3V234c0,4.1,3.3,7.4,7.4,7.4c4.1,0,7.4-3.3,7.4-7.4
			v-39.4c0-8.9,3.8-17.5,10.4-23.6c6.7-6.1,15.4-9,24.5-8.2c16.2,1.5,29,15.8,29,32.6V234c0,4.1,3.3,7.4,7.4,7.4
			c4.1,0,7.4-3.3,7.4-7.4v-38.5C182.9,170.6,163.9,149.7,139.6,147.9z'
                />
                <path
                  d='M290.3,190.8c-1.8-22.7-20.2-41.1-42.9-42.9c-13.8-1.1-27.2,3.9-36.9,13.6c-9.7,9.7-14.7,23.2-13.6,36.9
			c1.8,22.7,20.2,41.1,42.9,42.9c1.2,0.1,2.5,0.2,3.7,0.2c12.4,0,24.3-4.9,33.2-13.7C286.4,218,291.4,204.6,290.3,190.8z
			 M275.4,197.2c-1.2,15.4-13.8,28-29.2,29.2c-9.4,0.7-18.5-2.6-25.2-9.3c-6.6-6.6-10-15.8-9.3-25.2c1.2-15.4,13.8-28,29.2-29.2
			c0.9-0.1,1.7-0.1,2.6-0.1c8.5,0,16.6,3.3,22.6,9.4C272.8,178.7,276.2,187.9,275.4,197.2z'
                />
                <path
                  d='M394.9,162.7h38.6c4.1,0,7.4-3.3,7.4-7.4c0-4.1-3.3-7.4-7.4-7.4h-38.5c-24.9,0-45.8,19-47.6,43.4
			c-1,13.2,3.4,25.7,12.4,35.4c8.8,9.5,21.3,14.9,34.3,14.9h39.4c4.1,0,7.4-3.3,7.4-7.4v-39.4c0-4.1-3.3-7.4-7.4-7.4h-23.6
			c-4.1,0-7.4,3.3-7.4,7.4c0,4.1,3.3,7.4,7.4,7.4H426v24.5h-31.9c-8.9,0-17.5-3.8-23.6-10.4c-6.1-6.7-9-15.4-8.2-24.5
			C363.8,175.4,378.1,162.7,394.9,162.7z'
                />
                <path
                  d='M539.9,194.6c6.3-5.9,9.4-14.5,8.2-23.4c-1.8-13.4-13.6-23.4-27.5-23.4h-58.5c-4.1,0-7.4,3.3-7.4,7.4
			c0,4.1,3.3,7.4,7.4,7.4h58.7c6.2,0,11.6,4.4,12.5,10.2c0.6,3.7-0.4,7.2-2.7,10c-2.3,2.8-5.7,4.3-9.3,4.3h-58.9
			c-4.2,0-7.7,3.4-7.7,7.7V234c0,4.1,3.3,7.4,7.4,7.4c4.1,0,7.4-3.3,7.4-7.4v-31.9h51.7c6.7,0,12.2,5.5,12.2,12.2V234
			c0,4.1,3.3,7.4,7.4,7.4c4.1,0,7.4-3.3,7.4-7.4v-19.7C548.4,206.7,545.3,199.7,539.9,194.6z'
                />
                <path
                  d='M621.1,155.7c-1.4-2.4-3.9-3.9-6.7-3.9c0,0,0,0,0,0c-2.8,0-5.3,1.5-6.7,3.9L565.9,230c-1.3,2.4-1.3,5.3,0.1,7.6
			s3.9,3.8,6.6,3.8c2.8,0,5.3-1.5,6.7-3.9l35.1-62.5l35,62.5c1.4,2.4,3.9,3.9,6.7,3.9c2.8,0,5.2-1.4,6.6-3.8
			c1.4-2.4,1.4-5.2,0.1-7.6L621.1,155.7z'
                />
                <path
                  d='M737.2,147.8h-0.6c-2.7,0-5.1,1.4-6.4,3.8l-35.2,62.6l-35.2-62.6c-1.3-2.3-3.8-3.8-6.4-3.8l-0.6,0c0,0,0,0,0,0
			c-2.6,0-5,1.4-6.4,3.6c-1.3,2.3-1.4,5-0.1,7.4l42.3,75.2c1.3,2.3,3.8,3.8,6.4,3.8c2.7,0,5.1-1.4,6.4-3.8l42.3-75.2
			c1.3-2.3,1.3-5.1-0.1-7.4S739.8,147.8,737.2,147.8z'
                />
                <path
                  d='M768.3,147.8L768.3,147.8c-4.2,0-7.5,3.3-7.5,7.4v78.9c0,4.1,3.3,7.4,7.4,7.4h0.1c2,0,3.8-0.8,5.2-2.2
			c1.4-1.4,2.2-3.3,2.2-5.2l0-78.9C775.7,151.1,772.4,147.8,768.3,147.8z'
                />
                <path
                  d='M875.9,147.8H797c-4.1,0-7.4,3.3-7.4,7.4v0.1c0,4.1,3.3,7.4,7.4,7.4h32v71.4c0,4.1,3.3,7.4,7.4,7.4h0.1
			c4.1,0,7.4-3.3,7.4-7.4v-71.4h32c4.1,0,7.4-3.3,7.4-7.4v-0.1C883.2,151.1,879.9,147.8,875.9,147.8z'
                />
                <path
                  d='M983.3,147.8L983.3,147.8c-4.1,0-7.4,3.3-7.4,7.4c0,8.9-3.8,17.5-10.4,23.6c-6.7,6.1-15.4,9-24.5,8.2
			c-16.2-1.5-29-15.8-29-32.6c0-3.7-3-6.6-6.6-6.6h-0.8c-4.1,0-7.4,3.3-7.4,7.4c0,23,17,42.6,39.4,46.2V234c0,4.1,3.3,7.4,7.4,7.4
			c4.1,0,7.4-3.3,7.4-7.4v-32.5c22.4-3.6,39.4-23.3,39.4-46.2C990.7,151.1,987.4,147.8,983.3,147.8z'
                />
              </g>
            </g>
          </svg>
        </a>
      </div>
    </Fragment>
  );
};

export default Footer;
