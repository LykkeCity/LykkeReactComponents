import {mount, shallow} from 'enzyme';
import React from 'react';
import {Header} from '../Header/Header';

describe('<Header>', () => {
  it('should handle custom tag', () => {
    const handleLogout = jest.fn();
    const wrapper = shallow(<Header onLogout={handleLogout} tag="header" />);
    expect(wrapper.find('header').hostNodes()).toHaveLength(1);
  });

  it('should add custom class name', () => {
    const handleLogout = jest.fn();
    const wrapper = shallow(
      <Header className="foo-bar" onLogout={handleLogout} />
    );
    expect(wrapper.find('.foo-bar').hostNodes()).toHaveLength(1);
  });

  it('should contain user name', () => {
    const handleLogout = jest.fn();
    const wrapper = mount(
      <Header userName="Foo Bar" onLogout={handleLogout} />
    );
    expect(wrapper.find('.lykke-header__user-name').text()).toBe('Foo Bar');
  });

  it('should toggle mobile menu', () => {
    const handleLogout = jest.fn();
    const wrapper = mount(
      <Header userName="Foo Bar" onLogout={handleLogout} />
    );
    expect(wrapper.state('isMobileMenuVisible')).toBeFalsy();
    wrapper.find('.open-mobile-menu-btn').simulate('click');
    expect(wrapper.state('isMobileMenuVisible')).toBeTruthy();
  });
});
