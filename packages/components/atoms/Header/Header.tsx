import { Fragment, FunctionComponent, h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import './Header.modules.scss';
import { IconNames, IconSizes } from 'packages/types';
import classNames from 'classnames';

/**
 * <nge-header>
 *
 * Header component
 *
 * @element nge-header
 *
 * @slot logo - Slot for the logo content
 * @slot navigation - Slot for navigation links
 * @slot options - Slot for additional options
 *
 * @example
 * <nge-header>
 *   <div slot="logo">Logo</div>
 *   <div slot="navigation">Navigation Links</div>
 *   <div slot="options">User Options</div>
 * </nge-header>
 */

const Header: FunctionComponent = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <Fragment>
      <div className='nge-header'>
        <div className='logo'>
          <slot name='logo'></slot>
        </div>

        {isMobile ? (
          <button className={classNames('burger-menu', { active: isMenuOpen })} onClick={toggleMenu} aria-label='Toggle menu'>
            <svg xmlns='http://www.w3.org/2000/svg' width={isMenuOpen ? '40' : '50' } height={isMenuOpen ? '40' : '50' } viewBox='0 0 200 200'>
              <g stroke-width='6.5' stroke-linecap='round'>
                <path d='M72 82.286h28.75' fill='#000000' fill-rule='evenodd' stroke='#000000' />
                <path
                  d='M100.75 103.714l72.482-.143c.043 39.398-32.284 71.434-72.16 71.434-39.878 0-72.204-32.036-72.204-71.554'
                  fill='none'
                  stroke='#000000'
                />
                <path d='M72 125.143h28.75' fill='#000000' fill-rule='evenodd' stroke='#000000' />
                <path
                  d='M100.75 103.714l-71.908-.143c.026-39.638 32.352-71.674 72.23-71.674 39.876 0 72.203 32.036 72.203 71.554'
                  fill='none'
                  stroke='#000000'
                />
                <path
                  d='M100.75 82.286h28.75'
                  fill='#000000'
                  fill-rule='evenodd'
                  stroke='#000000'
                />
                <path
                  d='M100.75 125.143h28.75'
                  fill='#009100'
                  fill-rule='evenodd'
                  stroke='#000000'
                />
              </g>
            </svg>
          </button>
        ) : (
          <nav className='navigation'>
            <slot name='navigation'></slot>
          </nav>
        )}

        {!isMobile && (
          <div className='options'>
            <slot name='options'></slot>
          </div>
        )}

        {isMobile && (
          <aside className={classNames('side-menu', { open: isMenuOpen })}>
            <div className='mobile-nav'>
              <slot name='navigation'></slot>
            </div>
          </aside>
        )}
      </div>
    </Fragment>
  );
};

export default Header;