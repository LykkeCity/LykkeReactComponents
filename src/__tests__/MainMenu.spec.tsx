import {mount, shallow} from 'enzyme';
import React from 'react';
import {MainMenu} from '../Header/MainMenu';

describe('<MainMenu>', () => {
  it('should add custom class name', () => {
    const wrapper = shallow(<MainMenu className="foo-bar" />);
    expect(wrapper.find('.foo-bar').hostNodes()).toHaveLength(1);
  });

  it('should handle active item', () => {
    const wrapper = mount(<MainMenu className="foo-bar" activeItem="funds" />);
    expect(
      wrapper.find('.main-menu__item_funds.main-menu__item_active')
    ).toHaveLength(1);
    expect(
      wrapper.find('.main-menu__item_trade.main-menu__item_active')
    ).toHaveLength(0);
  });
});
