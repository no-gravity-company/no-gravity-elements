import { h } from 'preact';
import { shallow } from 'enzyme';

import Icon from '@atoms/Icon/Icon';

import * as useFetchSVGImport from '@hooks/useFetchSVG';

import { IconNames, IconSizes } from '@types';

describe('Icon', () => {
  beforeEach(() => {
    jest.spyOn(useFetchSVGImport, 'default').mockReturnValue(
      <svg
        xmlns='http://www.w3.org/2000/svg'
        id='Outline'
        viewBox='0 0 24 24'
        width='512'
        height='512'
      >
        <path d='M17.17,24a1,1,0,0,1-.71-.29L8.29,15.54a5,5,0,0,1,0-7.08L16.46.29a1,1,0,1,1,1.42,1.42L9.71,9.88a3,3,0,0,0,0,4.24l8.17,8.17a1,1,0,0,1,0,1.42A1,1,0,0,1,17.17,24Z' />
      </svg>,
    );
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });
  it('should match the snapshot', async () => {
    const wrapper = shallow(<Icon name={IconNames.cross} size={IconSizes.regular} />);
    expect(wrapper).toMatchSnapshot();
  });

  it.each`
    name               | size
    ${IconNames.cross} | ${IconSizes.extraLarge}
    ${IconNames.cross} | ${IconSizes.large}
  `('should render correctly with the provided name and size', ({ name, size }) => {
    const wrapper = shallow(<Icon name={name} size={size} />);
    expect(wrapper.find(`span.${size}`).exists()).toBe(true);
    expect(wrapper.find('svg').exists()).toBe(true);
  });
});
