import { h } from 'preact';
import { shallow } from 'enzyme';

import Section from './Section';

describe('Section', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Section>Test</Section>);
    expect(wrapper).toMatchSnapshot();
  });
});