import { h } from 'preact';
import { shallow } from 'enzyme';

import BannerCta from './BannerCta';

describe('BannerCta', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<BannerCta>Test</BannerCta>);
    expect(wrapper).toMatchSnapshot();
  });
});