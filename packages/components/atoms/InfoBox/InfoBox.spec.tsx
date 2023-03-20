import Enzyme, { mount, shallow } from 'enzyme';
import { signal } from '@preact/signals';
import { h, Fragment } from 'preact';
import { InfoBoxProps } from './types';
import InfoBox from './InfoBox';

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
        expect(wrapper.find('span').at(1).text()).toEqual(label);
    });
});
