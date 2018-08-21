import {mount, shallow} from 'enzyme';
import React from 'react';
import {UserMenu} from '../Header/UserMenu';

describe('<UserMenu>', () => {
  it('should add custom class name', () => {
    const handleLogout = jest.fn();
    const wrapper = shallow(
      <UserMenu
        userName="Foo Bar"
        email="foo@bar.baz"
        className="foo-bar"
        onLogout={handleLogout}
      />
    );
    expect(wrapper.find('.foo-bar').hostNodes()).toHaveLength(1);
  });

  it('should contain user initials', () => {
    const handleLogout = jest.fn();
    const wrapper = mount(
      <UserMenu
        userName="Foo Bar"
        email="foo@bar.baz"
        className="foo-bar"
        onLogout={handleLogout}
      />
    );
    expect(wrapper.find('.user-avatar').text()).toBe('FB');
  });

  it('should contain user name', () => {
    const handleLogout = jest.fn();
    const wrapper = mount(
      <UserMenu
        userName="Foo Bar"
        email="foo@bar.baz"
        className="foo-bar"
        onLogout={handleLogout}
      />
    );
    expect(wrapper.find('.user-menu__name').text()).toBe('Foo Bar');
  });

  it('should contain user email', () => {
    const handleLogout = jest.fn();
    const wrapper = mount(
      <UserMenu
        userName="Foo Bar"
        email="foo@bar.baz"
        className="foo-bar"
        onLogout={handleLogout}
      />
    );
    expect(wrapper.find('.user-menu__email').text()).toBe('foo@bar.baz');
  });

  it('should handle logout', () => {
    const handleLogout = jest.fn();
    const wrapper = mount(
      <UserMenu
        userName="Foo Bar"
        email="foo@bar.baz"
        className="foo-bar"
        onLogout={handleLogout}
      />
    );
    wrapper.find('.user-menu__sign-out').simulate('click');
    expect(handleLogout).toBeCalled();
  });
});
