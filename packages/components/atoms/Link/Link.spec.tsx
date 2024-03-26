import { h } from 'preact';
import { shallow } from 'enzyme';

import { TypographySizes } from '@no-gravity-elements/types';

import Link from './Link';

describe('Link', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(
      <Link size={TypographySizes.h1} href='/'>
        Link
      </Link>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it.each`
    size
    ${TypographySizes.h1}
    ${TypographySizes.h4}
    ${undefined}
  `('should render correctly with the provided size', ({ size }) => {
    const wrapper = shallow(
      <Link size={size} href='/'>
        Link
      </Link>,
    );
    const element = wrapper.find(size || TypographySizes.p);
    expect(element).not.toBe(null);
  });
});
