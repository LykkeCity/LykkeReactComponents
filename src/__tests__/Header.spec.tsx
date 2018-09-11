import {mount, shallow} from 'enzyme';
import React from 'react';
import {Header} from '../Header/Header';
import {MenuItem} from '../Header/MainMenu';

export const headerLinkOptions = [
  {
    title: MenuItem.Trade,
    url: 'http://trade.lykke.com'
  },
  {
    title: MenuItem.Funds,
    url: 'http://wallet.lykke.com'
  },
  {
    title: MenuItem.Profile,
    url: '#'
  }
];

export const renderLink = (
  classes: string,
  title: JSX.Element,
  url: string
) => (
  <a href={url} className={classes}>
    {title}
  </a>
);

describe('<Header>', () => {
  it('should handle custom tag', () => {
    const handleLogout = jest.fn();
    const wrapper = shallow(
      <Header
        onLogout={handleLogout}
        tag="header"
        renderLink={renderLink}
        headerLinkOptions={headerLinkOptions}
      />
    );
    expect(wrapper.find('header').hostNodes()).toHaveLength(1);
  });

  it('should add custom class name', () => {
    const handleLogout = jest.fn();
    const wrapper = shallow(
      <Header
        className="foo-bar"
        onLogout={handleLogout}
        renderLink={renderLink}
        headerLinkOptions={headerLinkOptions}
      />
    );
    expect(wrapper.find('.foo-bar').hostNodes()).toHaveLength(1);
  });

  it('should contain user name', () => {
    const handleLogout = jest.fn();
    const wrapper = mount(
      <Header
        userName="Foo Bar"
        onLogout={handleLogout}
        renderLink={renderLink}
        headerLinkOptions={headerLinkOptions}
      />
    );
    expect(wrapper.find('.lykke-header__user-name').text()).toBe('Foo Bar');
  });

  it('should toggle mobile menu', () => {
    const handleLogout = jest.fn();
    const wrapper = mount(
      <Header
        userName="Foo Bar"
        onLogout={handleLogout}
        renderLink={renderLink}
        headerLinkOptions={headerLinkOptions}
      />
    );
    expect(wrapper.state('isMobileMenuVisible')).toBeFalsy();
    wrapper.find('.open-mobile-menu-btn').simulate('click');
    expect(wrapper.state('isMobileMenuVisible')).toBeTruthy();
  });
});
