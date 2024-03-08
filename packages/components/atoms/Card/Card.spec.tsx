import { h } from 'preact';
import { shallow } from 'enzyme';

import Card from '@atoms/Card/Card';

describe('Card', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(
      <Card>
        <div style={{ width: 200, height: 200 }} />
      </Card>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
