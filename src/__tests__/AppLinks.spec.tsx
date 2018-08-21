import {shallow} from 'enzyme';
import React from 'react';
import {AppLinks} from '../Header/AppLinks';

describe('<AppLinks>', () => {
  it('should add custom class name', () => {
    const wrapper = shallow(<AppLinks className="foo-bar" />);
    expect(wrapper.find('.foo-bar').hostNodes()).toHaveLength(1);
  });
});
