import { h } from 'preact';
import { mount } from 'enzyme';
import Carousel, { CarouselProps } from './Carousel';
import { StringBoolean } from '@no-gravity-elements/types';

jest.useFakeTimers();

describe('Carousel', () => {
  let wrapper: any;

  afterEach(() => {
    if (wrapper) {
      wrapper.unmount();
    }
    jest.clearAllTimers();
    jest.runOnlyPendingTimers();
  });

  it('renders without crashing with children', () => {
    wrapper = mount(
      <Carousel>
        <div>Slide 1</div>
        <div>Slide 2</div>
      </Carousel>,
    );
    expect(wrapper.find('.nge-carousel')).toHaveLength(1);
    expect(wrapper.find('.slide')).toHaveLength(2);
    expect(wrapper.find('.slides-wrapper').prop('style').transform).toBe('translateX(0%)');
  });

  it('renders navigation buttons when navigation is true', () => {
    wrapper = mount(
      <Carousel navigation={StringBoolean.TRUE}>
        <div>Slide 1</div>
      </Carousel>,
    );
    expect(wrapper.find('.nav.prev')).toHaveLength(1);
    expect(wrapper.find('.nav.next')).toHaveLength(1);
  });

  it('hides navigation buttons when navigation is false', () => {
    wrapper = mount(
      <Carousel navigation={StringBoolean.FALSE}>
        <div>Slide 1</div>
        <div>Slide 2</div>
      </Carousel>,
    );
    expect(wrapper.find('.nav')).toHaveLength(0);
  });

  it('renders indicators when indicators is true', () => {
    wrapper = mount(
      <Carousel indicators={StringBoolean.TRUE}>
        <div>Slide 1</div>
        <div>Slide 2</div>
      </Carousel>,
    );
    expect(wrapper.find('.indicator')).toHaveLength(2);
    expect(wrapper.find('.indicator.active')).toHaveLength(1);
  });

  it('handles next click', () => {
    wrapper = mount(
      <Carousel>
        <div>Slide 1</div>
        <div>Slide 2</div>
        <div>Slide 3</div>
      </Carousel>,
    );
    wrapper.find('.nav.next').simulate('click');
    expect(wrapper.find('.slides-wrapper').prop('style').transform).toBe('translateX(-100%)');
  });

  it('handles prev click', () => {
    wrapper = mount(
      <Carousel>
        <div>Slide 1</div>
        <div>Slide 2</div>
      </Carousel>,
    );
    wrapper.find('.nav.next').simulate('click');
    wrapper.find('.nav.prev').simulate('click');
    expect(wrapper.find('.slides-wrapper').prop('style').transform).toBe('translateX(0%)');
  });

  it('handles indicator click', () => {
    wrapper = mount(
      <Carousel indicators={StringBoolean.TRUE}>
        <div>Slide 1</div>
        <div>Slide 2</div>
      </Carousel>,
    );
    wrapper.find('.indicator').last().simulate('click');
    expect(wrapper.find('.indicator.active').index()).toBe(1);
    expect(wrapper.find('.slides-wrapper').prop('style').transform).toBe('translateX(-100%)');
  });

  it('autoplays when autoplay is true', () => {
    wrapper = mount(
      <Carousel autoplay={StringBoolean.TRUE} autoplayInterval="1000">
        <div>Slide 1</div>
        <div>Slide 2</div>
      </Carousel>,
    );
    jest.advanceTimersByTime(1000);
    expect(wrapper.find('.slides-wrapper').prop('style').transform).toBe('translateX(-100%)');
  });

  it('pauses autoplay on hover when pauseOnHover is true', () => {
    wrapper = mount(
      <Carousel autoplay={StringBoolean.TRUE} pauseOnHover={StringBoolean.TRUE} autoplayInterval="1000">
        <div>Slide 1</div>
        <div>Slide 2</div>
      </Carousel>,
    );
    wrapper.find('.nge-carousel').simulate('mouseenter');
    jest.advanceTimersByTime(1500);
    expect(wrapper.find('.slides-wrapper').prop('style').transform).toBe('translateX(0%)');
    wrapper.find('.nge-carousel').simulate('mouseleave');
    jest.advanceTimersByTime(1000);
    expect(wrapper.find('.slides-wrapper').prop('style').transform).toBe('translateX(-100%)');
  });

  it('respects infinite false', () => {
    wrapper = mount(
      <Carousel infinite={StringBoolean.FALSE}>
        <div>Slide 1</div>
        <div>Slide 2</div>
      </Carousel>,
    );
    wrapper.find('.nav.next').simulate('click');
    wrapper.find('.nav.next').simulate('click');
    expect(wrapper.find('.slides-wrapper').prop('style').transform).toBe('translateX(-100%)');
  });

  it('dispatches slidechange event', () => {
    const handleSlideChange = jest.fn();
    wrapper = mount(
      <Carousel>
        <div>Slide 1</div>
        <div>Slide 2</div>
      </Carousel>,
    );
    wrapper.find('.nge-carousel').getDOMNode()!.addEventListener('slidechange', handleSlideChange);
    wrapper.find('.nav.next').simulate('click');
    expect(handleSlideChange).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: { index: 1 },
      }),
    );
  });

  it('has proper accessibility attributes', () => {
    wrapper = mount(
      <Carousel>
        <div>Slide 1</div>
      </Carousel>,
    );
    expect(wrapper.find('.nge-carousel').prop('role')).toBe('region');
    expect(wrapper.find('.nge-carousel').prop('aria-roledescription')).toBe('carousel');
    expect(wrapper.find('.slide').prop('aria-hidden')).toBe(false);
  });

  it('applies custom className and style', () => {
    wrapper = mount(<Carousel className="custom" style="border: 1px solid red;" />);
    expect(wrapper.find('.nge-carousel').hasClass('custom')).toBe(true);
    expect(wrapper.find('.nge-carousel').prop('style')).toBe('border: 1px solid red;');
  });
});