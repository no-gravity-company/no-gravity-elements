import { h } from 'preact';
import { shallow } from 'enzyme';

import Footer from './Footer';

describe('Footer', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Footer>Test</Footer>);
    expect(wrapper).toMatchSnapshot();
  });

  it('AC-14 AC-S3 names the Powered by link No Gravity, hides its logo and keeps its address', () => {
    const link = shallow(<Footer />).find('.powered a');

    expect(link.prop('aria-label')).toBe('No Gravity');
    expect(link.find('svg').prop('aria-hidden')).toBe('true');
    expect(link.find('svg').prop('focusable')).toBe('false');
    expect(link.prop('href')).toBe('https://www.no-gravity.es');
    expect(link.prop('target')).toBeUndefined();
  });
});
