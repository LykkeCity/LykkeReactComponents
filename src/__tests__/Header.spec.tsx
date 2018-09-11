import {mount, shallow} from 'enzyme';
import React from 'react';
import {Header} from '../Header/Header';
import {MenuItem} from '../Header/MainMenu';

const headerLinkOptions = [
  {
    isHidden: false,
    link: MenuItem.Trade
  },
  {
    isHidden: false,
    link: MenuItem.Funds
  },
  {
    isHidden: true,
    link: MenuItem.Profile
  }
];

const getLinkUrl = (menuItem: MenuItem) => {
  switch (menuItem) {
    case MenuItem.Trade: {
      return 'http://trade.lykke.com';
    }
    case MenuItem.Funds: {
      return 'http://wallet.lykke.com';
    }
    default:
      return '';
  }
};

const renderLink = (
  classes: string,
  title: JSX.Element,
  menuItem: MenuItem
) => (
  <a href={getLinkUrl(menuItem)} className={classes}>
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
