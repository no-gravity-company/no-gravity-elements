import { h } from 'preact';
import { shallow, ShallowWrapper } from 'enzyme';
import BannerStage, { BannerStageProps } from './BannerStage';
import { StringBoolean } from '@no-gravity-elements/types';

describe('BannerStage', () => {
  let wrapper: ShallowWrapper;

  afterEach(() => {
    if (wrapper) {
      wrapper.unmount();
    }
  });

  it('should match the snapshot with default props', () => {
    wrapper = shallow(<BannerStage />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render title', () => {
    wrapper = shallow(<BannerStage title="Test Title" />);
    expect(wrapper.find('.title').text()).toBe('Test Title');
  });

  it('should render subtitle', () => {
    wrapper = shallow(<BannerStage subtitle="Test Subtitle" />);
    expect(wrapper.find('.subtitle').text()).toBe('Test Subtitle');
  });

  it('should render description', () => {
    wrapper = shallow(<BannerStage description="Test Description" />);
    expect(wrapper.find('.description').text()).toBe('Test Description');
  });

  it('should render background image div with style', () => {
    wrapper = shallow(<BannerStage backgroundImage="https://example.com/image.jpg" />);
    const bgImage = wrapper.find('.bg-image');
    expect(bgImage.exists()).toBe(true);
    expect(bgImage.prop('style')).toEqual({ backgroundImage: 'url(https://example.com/image.jpg)' });
  });

  it('should render video with autoplay', () => {
    wrapper = shallow(<BannerStage videoSrc="https://example.com/video.mp4" autoplay={StringBoolean.TRUE} />);
    const video = wrapper.find('video');
    expect(video.exists()).toBe(true);
    expect(video.prop('src')).toBe('https://example.com/video.mp4');
    expect(video.prop('autoPlay')).toBe(true);
    expect(video.prop('muted')).toBe(true);
    expect(video.prop('loop')).toBe(true);
  });

  it('should render video without autoplay', () => {
    wrapper = shallow(<BannerStage videoSrc="https://example.com/video.mp4" autoplay={StringBoolean.FALSE} />);
    const video = wrapper.find('video');
    expect(video.exists()).toBe(true);
    expect(video.prop('autoPlay')).toBe(false);
  });

  it('should render CTA button', () => {
    wrapper = shallow(<BannerStage ctaText="Click Me" />);
    const button = wrapper.find('nge-button');
    expect(button.exists()).toBe(true);
    expect(button.prop('value')).toBe('Click Me');
  });

  it('should pass ctaHref to button', () => {
    wrapper = shallow(<BannerStage ctaText="Click Me" ctaHref="https://example.com" />);
    const button = wrapper.find('nge-button');
    expect(button.prop('href')).toBe('https://example.com');
  });

  it('should pass ctaVariant to button', () => {
    wrapper = shallow(<BannerStage ctaText="Click Me" ctaVariant="secondary" />);
    const button = wrapper.find('nge-button');
    expect(button.prop('variant')).toBe('secondary');
  });

  it('should disable button when disabled=true', () => {
    wrapper = shallow(<BannerStage ctaText="Click Me" disabled={StringBoolean.TRUE} />);
    const button = wrapper.find('nge-button');
    expect(button.prop('disabled')).toBe(StringBoolean.TRUE);
  });

  it('should set loading on button', () => {
    wrapper = shallow(<BannerStage ctaText="Click Me" loading={StringBoolean.TRUE} />);
    const button = wrapper.find('nge-button');
    expect(button.prop('loading')).toBe(StringBoolean.TRUE);
  });

  it('should apply variant class', () => {
    wrapper = shallow(<BannerStage variant="hero" />);
    expect(wrapper.hasClass('variant-hero')).toBe(true);
  });

  it('should apply theme class', () => {
    wrapper = shallow(<BannerStage theme="light" />);
    expect(wrapper.hasClass('theme-light')).toBe(true);
  });

  it('should apply has-overlay class when overlayOpacity > 0', () => {
    wrapper = shallow(<BannerStage overlayOpacity="0.7" />);
    expect(wrapper.hasClass('has-overlay')).toBe(true);
  });

  it('should apply has-video class when videoSrc present', () => {
    wrapper = shallow(<BannerStage videoSrc="test.mp4" />);
    expect(wrapper.hasClass('has-video')).toBe(true);
  });

  it('should set --overlay-opacity style', () => {
    wrapper = shallow(<BannerStage overlayOpacity="0.3" />);
    expect(wrapper.prop('style')).toEqual({ '--overlay-opacity': 0.3 });
  });

  it('should render slot content', () => {
    wrapper = shallow(<BannerStage>Test Slot</BannerStage>);
    expect(wrapper.find('slot').exists()).toBe(true);
  });

  it('should match snapshot with hero variant and full props', () => {
    const fullProps: BannerStageProps = {
      title: 'Hero',
      subtitle: 'Subtitle',
      description: 'Desc',
      backgroundImage: 'bg.jpg',
      ctaText: 'CTA',
      ctaHref: '/link',
      ctaVariant: 'primary',
      variant: 'hero',
      theme: 'dark',
      overlayOpacity: '0.5',
      autoplay: StringBoolean.TRUE,
      disabled: StringBoolean.FALSE,
      loading: StringBoolean.FALSE,
    };
    wrapper = shallow(<BannerStage {...fullProps} />);
    expect(wrapper).toMatchSnapshot();
  });
});