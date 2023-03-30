import { h } from 'preact';
import { shallow } from 'enzyme';

import DisplayBox from '@atoms/DisplayBox/DisplayBox';

describe('display-box web component snapshot test', () => {
  it.each`
    label    | value
    ${'foo'} | ${1}
    ${'bar'} | ${5}
  `('should match the snapshot', ({ label, value }) => {
    const wrapper = shallow(<DisplayBox label={label} value={value} />);
    expect(wrapper).toMatchSnapshot();
  });
});
