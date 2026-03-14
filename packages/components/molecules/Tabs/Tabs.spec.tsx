import { h } from 'preact';
import { shallow } from 'enzyme';

import Tabs from './Tabs';
import { StringBoolean } from '@no-gravity-elements/types';

describe('Tabs', () => {
  const defaultTabs = [
    { label: 'Tab 1', content: 'Content 1' },
    { label: 'Tab 2', content: 'Content 2' },
  ];

  it('should match the snapshot', () => {
    const wrapper = shallow(<Tabs tabs={defaultTabs} />);
    expect(wrapper).toMatchSnapshot();
  });

  it.each`
    variant     | orientation  | size
    ${'primary'}| ${undefined} | ${undefined}
    ${'secondary'}| ${undefined} | ${undefined}
    ${undefined}| ${'vertical'}| ${undefined}
    ${undefined}| ${undefined} | ${'small'}
    ${undefined}| ${undefined} | ${'large'}
  `('should render correctly with the provided variant $variant, orientation $orientation and size $size', ({ variant, orientation, size }) => {
    const props = {
      tabs: defaultTabs,
      ...(variant && { variant }),
      ...(orientation && { orientation }),
      ...(size && { size }),
    };
    const wrapper = shallow(<Tabs {...props} />);
    const element = wrapper.find('.nge-tabs');
    expect(element.exists()).toBe(true);
    if (variant) {
      expect(element.hasClass(`variant-${variant}`)).toBe(true);
    }
    if (orientation) {
      expect(element.hasClass(orientation)).toBe(true);
    }
    if (size) {
      expect(element.hasClass(`size-${size}`)).toBe(true);
    }
  });

  it('should render disabled state', () => {
    const wrapper = shallow(<Tabs tabs={defaultTabs} disabled={StringBoolean.TRUE} />);
    expect(wrapper.find('.nge-tabs').hasClass('disabled')).toBe(true);
  });

  it('should render with activeIndex 1', () => {
    const wrapper = shallow(<Tabs tabs={defaultTabs} activeIndex={1} />);
    const activeTab = wrapper.find('.tab').findWhere(n => n.hasClass('active'));
    expect(activeTab.length).toBe(1);
    expect(activeTab.parent().children().index(activeTab.node)).toBe(1);
  });
});