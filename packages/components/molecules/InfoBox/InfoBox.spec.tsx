import { h } from 'preact';
import { shallow } from 'enzyme';

import InfoBox from '@molecules/InfoBox/InfoBox';

describe('InfoBox', () => {
  it.each`
    label
    ${'foo'}
    ${'bar'}
  `('should match the snapshot', ({ label }) => {
    const wrapper = shallow(<InfoBox label={label} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with the provided label', () => {
    const label = 'Test Label';
    const wrapper = shallow(<InfoBox label={label} />);
    expect(wrapper.find('span').at(0).text()).toEqual(label);
  });
});
