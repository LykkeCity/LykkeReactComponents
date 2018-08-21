import {shallow} from 'enzyme';
import React from 'react';
import {GetStartedButton} from '../Header/GetStartedButton';

describe('<GetStartedButton>', () => {
  it('should add custom class name', () => {
    const wrapper = shallow(<GetStartedButton className="foo-bar" />);
    expect(wrapper.find('.foo-bar').hostNodes()).toHaveLength(1);
  });
});
