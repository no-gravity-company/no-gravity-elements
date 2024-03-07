import { h } from 'preact';
import { shallow } from 'enzyme';

import Typography from '@atoms/Typography/Typography';

import { TypographySizes } from '@types';

describe('Typography', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(
      <Typography size={TypographySizes.h1} tag={'h1'}>
        Test
      </Typography>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it.each`
    tag          | size
    ${'h1'}      | ${TypographySizes.h1}
    ${'h2'}      | ${TypographySizes.h4}
    ${undefined} | ${undefined}
  `('should render correctly with the provided size and tag', ({ tag, size }) => {
    const wrapper = shallow(
      <Typography size={size} tag={tag}>
        Test
      </Typography>,
    );
    const element = wrapper.find(tag || 'span');
    expect(element).not.toBe(null);
    expect(element.hasClass(size || 'p')).toBeTruthy();
  });
});
