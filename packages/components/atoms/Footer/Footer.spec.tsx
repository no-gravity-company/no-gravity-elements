import { h } from 'preact';
import { shallow } from 'enzyme';

import Footer from './Footer';

describe('Footer', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Footer>Test</Footer>);
    expect(wrapper).toMatchSnapshot();
  });
});