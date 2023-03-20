import { shallow } from 'enzyme';
import { h } from 'preact';
import DisplayBox from './DisplayBox';

describe('display-box web component snapshot test', () => {
    it.each`
        label    | value
        ${'foo'} | ${1}
        ${'bar'} | ${5}
    `('should match the snapshot', ({ label, value }: any) => {
        const wrapper = shallow(<DisplayBox label={label} value={value} />);
        expect(wrapper).toMatchSnapshot();
    });
});
