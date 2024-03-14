import { h } from 'preact';
import { shallow } from 'enzyme';

import Button from '@atoms/Button/Button';
import { ButtonTypes } from '@atoms/Button/types';

describe('Button', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Button type={ButtonTypes.primary}>Test</Button>);
    expect(wrapper).toMatchSnapshot();
  });

  it.each`
    type
    ${ButtonTypes.secondary}
    ${ButtonTypes.destructive}
    ${undefined}
  `('should render correctly with the provided size and tag', ({ type }) => {
    const wrapper = shallow(<Button type={type}>Button</Button>);
    const element = wrapper.find(`button.${type || 'primary'}`);
    expect(element.exists()).toBe(true);
  });
});
