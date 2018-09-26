import {mount, shallow} from 'enzyme';
import React from 'react';
import {MenuItem} from '../Header/';
import {Header} from '../Header/Header';

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
    title: MenuItem.Settings
  }
];

export const secondaryMenuItems = [
  {
    title: MenuItem.LykkeStreams
  },
  {
    title: MenuItem.BlockchainExplorer
  },
  {
    title: MenuItem.Assets
  },
  {
    title: MenuItem.ApiKeys
  },
  {
    title: MenuItem.FeesAndLimits
  }
];

export const renderLink = (
  classes: string,
  title: JSX.Element,
  url: string
) => (
  <a href={url} className={classes} key={`${url}_${title.props.children}`}>
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
        isAuth={true}
        isSecondaryMenuShown={false}
        isBeta={true}
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
        secondaryMenuLinkOptions={secondaryMenuItems}
        isAuth={true}
        isSecondaryMenuShown={false}
        isBeta={false}
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
        secondaryMenuLinkOptions={secondaryMenuItems}
        isAuth={true}
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
        secondaryMenuLinkOptions={secondaryMenuItems}
        isAuth={false}
        isSecondaryMenuShown={true}
      />
    );
    expect(wrapper.state('isMobileMenuVisible')).toBeFalsy();
    wrapper.find('.open-mobile-menu-btn').simulate('click');
    expect(wrapper.state('isMobileMenuVisible')).toBeTruthy();
  });

  it('should contain secondary menu in mobile menu and header', () => {
    const handleLogout = jest.fn();
    const wrapper = mount(
      <Header
        userName="Foo Bar"
        onLogout={handleLogout}
        renderLink={renderLink}
        headerLinkOptions={headerLinkOptions}
        secondaryMenuLinkOptions={secondaryMenuItems}
        isAuth={false}
        isSecondaryMenuShown={true}
      />
    );
    expect(wrapper.find('SecondaryMenu')).toHaveLength(2);
  });

  it('should not contain secondary menu in mobile menu and header', () => {
    const handleLogout = jest.fn();
    const wrapper = mount(
      <Header
        userName="Foo Bar"
        onLogout={handleLogout}
        renderLink={renderLink}
        headerLinkOptions={headerLinkOptions}
        secondaryMenuLinkOptions={secondaryMenuItems}
        isAuth={false}
      />
    );
    expect(wrapper.find('SecondaryMenu')).toHaveLength(0);
  });
});
