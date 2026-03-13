import { FunctionComponent, h, JSX } from 'preact';
import { useState, useEffect, useCallback, useRef } from 'preact/hooks';
import classNames from 'classnames';
import { StringBoolean } from '@no-gravity-elements/types';
import { CarouselProps } from './types';

import './Carousel.modules.scss';

/**
 * <nge-carousel>
 *
 * Highly customizable Carousel component
 *
 * @element nge-carousel
 *
 * @prop {boolean} [autoplay] - Enables autoplay
 * @prop {string} [autoplayInterval] - Autoplay interval in ms, default 5000
 * @prop {boolean} [navigation] - Shows navigation arrows, default true
 * @prop {boolean} [indicators] - Shows dot indicators, default true
 * @prop {boolean} [infinite] - Enables infinite loop, default true
 * @prop {boolean} [pauseOnHover] - Pauses autoplay on hover, default true
 * @prop {string} [className] - Additional CSS classes
 * @prop {string} [style] - Inline styles
 *
 * @fires slidechange - Dispatched when slide changes, detail: { index: number }
 *
 * @slot - Carousel slides as direct children
 *
 * @cssproperty --nge-carousel-transition - Transition for slides
 *
 * @example
 * <nge-carousel autoplay navigation indicators>
 *   <div>Slide 1</div>
 *   <div>Slide 2</div>
 *   <div>Slide 3</div>
 * </nge-carousel>
 */

const Carousel: FunctionComponent<CarouselProps> = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<number | null>(null);

  const autoplay = props.autoplay === StringBoolean.TRUE;
  const autoplayInterval = Math.max(1000, parseInt(props.autoplayInterval || '5000', 10));
  const navigation = props.navigation !== StringBoolean.FALSE;
  const indicators = props.indicators !== StringBoolean.FALSE;
  const infinite = props.infinite !== StringBoolean.FALSE;
  const pauseOnHover = props.pauseOnHover !== StringBoolean.FALSE;

  const slides: (JSX.Element | null)[] = Array.isArray(props.children)
    ? (props.children as JSX.Element[])
    : props.children
    ? [props.children as JSX.Element]
    : [];
  const numSlides = slides.length;

  const handleIndexChange = useCallback((newIndex: number) => {
    setCurrentIndex(newIndex);
    if (rootRef.current) {
      rootRef.current.dispatchEvent(
        new CustomEvent('slidechange', {
          bubbles: true,
          composed: true,
          detail: { index: newIndex },
        }),
      );
    }
  }, []);

  const next = useCallback(() => {
    const newIndex = infinite ? (currentIndex + 1) % numSlides : Math.min(currentIndex + 1, numSlides - 1);
    handleIndexChange(newIndex);
  }, [currentIndex, numSlides, infinite, handleIndexChange]);

  const prev = useCallback(() => {
    const newIndex = infinite ? (currentIndex - 1 + numSlides) % numSlides : Math.max(currentIndex - 1, 0);
    handleIndexChange(newIndex);
  }, [currentIndex, numSlides, infinite, handleIndexChange]);

  const goTo = useCallback((index: number) => {
    handleIndexChange(index);
  }, [handleIndexChange]);

  const startAutoplay = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (numSlides <= 1) return;

    intervalRef.current = window.setInterval(() => {
      if (infinite || currentIndex < numSlides - 1) {
        next();
      } else {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
      }
    }, autoplayInterval);
  }, [autoplayInterval, currentIndex, infinite, next, numSlides]);

  useEffect(() => {
    if (autoplay && numSlides > 1) {
      startAutoplay();
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [autoplay, numSlides, startAutoplay]);

  const handleMouseEnter = useCallback(() => {
    if (pauseOnHover && intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, [pauseOnHover]);

  const handleMouseLeave = useCallback(() => {
    if (pauseOnHover && autoplay && numSlides > 1 && !intervalRef.current) {
      startAutoplay();
    }
  }, [autoplay, numSlides, pauseOnHover, startAutoplay]);

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        next();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prev();
      }
    };

    document.addEventListener('keydown', handleKeydown);
    return () => document.removeEventListener('keydown', handleKeydown);
  }, [next, prev]);

  return (
    <div
      ref={rootRef}
      className={classNames('nge-carousel', props.className)}
      style={props.style}
      role="region"
      aria-roledescription="carousel"
      aria-label="Carousel"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="carousel-container">
        <div
          className="slides-wrapper"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          role="list"
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="slide"
              aria-hidden={index !== currentIndex}
              aria-label={`Slide ${index + 1} of ${numSlides}`}
              role="group"
            >
              {slide}
            </div>
          ))}
        </div>
      </div>
      {navigation && (
        <>
          <button className="nav prev" onClick={prev} aria-label="Previous slide">
            ‹
          </button>
          <button className="nav next" onClick={next} aria-label="Next slide">
            ›
          </button>
        </>
      )}
      {indicators && numSlides > 1 && (
        <div className="indicators" role="tablist">
          {Array.from({ length: numSlides }, (_, index) => (
            <button
              key={index}
              className={classNames('indicator', { active: index === currentIndex })}
              onClick={() => goTo(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-selected={index === currentIndex}
              role="tab"
              tabIndex={index === currentIndex ? 0 : -1}
            />
          ))}
        </div>
      )}
    </div>
  );
};

Carousel.observedAttributes = [
  'autoplay',
  'autoplay-interval',
  'navigation',
  'indicators',
  'infinite',
  'pauseonhover',
];

export default Carousel;