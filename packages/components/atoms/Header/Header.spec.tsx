import { h } from 'preact';
import { shallow } from 'enzyme';

import Header from './Header';

describe('Header', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Header>Test</Header>);
    expect(wrapper).toMatchSnapshot();
  });
});