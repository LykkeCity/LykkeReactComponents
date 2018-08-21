import {shallow} from 'enzyme';
import React from 'react';
import {SecondaryMenu} from '../Header/SecondaryMenu';

describe('<SecondaryMenu>', () => {
  it('should add custom class name', () => {
    const wrapper = shallow(<SecondaryMenu className="foo-bar" />);
    expect(wrapper.find('.foo-bar').hostNodes()).toHaveLength(1);
  });
});
