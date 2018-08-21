import {mount, shallow} from 'enzyme';
import React from 'react';
import {UserMenu} from '../Header/UserMenu';

const handleLogout = jest.fn();
const getTestUserMenu = () => (
  <UserMenu
    userName="Foo Bar"
    email="foo@bar.baz"
    className="foo-bar"
    onLogout={handleLogout}
  />
);

describe('<UserMenu>', () => {
  it('should add custom class name', () => {
    const wrapper = shallow(getTestUserMenu());
    expect(wrapper.find('.foo-bar').hostNodes()).toHaveLength(1);
  });

  it('should contain user initials', () => {
    const wrapper = mount(getTestUserMenu());
    expect(wrapper.find('.user-avatar').text()).toBe('FB');
  });

  it('should contain user name', () => {
    const wrapper = mount(getTestUserMenu());
    expect(wrapper.find('.user-menu__name').text()).toBe('Foo Bar');
  });

  it('should contain user email', () => {
    const wrapper = mount(getTestUserMenu());
    expect(wrapper.find('.user-menu__email').text()).toBe('foo@bar.baz');
  });

  it('should handle logout', () => {
    const wrapper = mount(getTestUserMenu());
    wrapper.find('.user-menu__sign-out').simulate('click');
    expect(handleLogout).toBeCalled();
  });
});
