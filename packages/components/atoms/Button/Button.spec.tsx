import { h } from 'preact';
import { shallow } from 'enzyme';

import { ButtonTypes } from '@no-gravity-elements/types';

import Button from './Button';

describe('Button', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Button value="test" variant={ButtonTypes.primary} />);
    expect(wrapper).toMatchSnapshot();
  });

  it.each`
    type
    ${ButtonTypes.disruptive}
    ${ButtonTypes.destructive}
    ${undefined}
  `('should render correctly with the provided size and tag', ({ type }) => {
    const wrapper = shallow(<Button value="button" variant={type} />);
    const element = wrapper.find(`button.${type || 'primary'}`);
    expect(element.exists()).toBe(true);
  });
});
