import {mount, shallow} from 'enzyme';
import React from 'react';
import {MenuItem} from '../Header/MainMenu';
import {MobileMenu} from '../Header/MobileMenu';

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

describe('<MobileMenu>', () => {
  it('should add custom class name', () => {
    const handleCloseClick = jest.fn();
    const wrapper = shallow(
      <MobileMenu
        className="foo-bar"
        userName="Foo Bar"
        onCloseClick={handleCloseClick}
        headerLinkOptions={headerLinkOptions}
        renderLink={renderLink}
      />
    );
    expect(wrapper.find('.foo-bar').hostNodes()).toHaveLength(1);
  });

  it('should contain user initials if userName provided', () => {
    const handleCloseClick = jest.fn();
    const wrapper = mount(
      <MobileMenu
        className="foo-bar"
        userName="Foo Bar"
        onCloseClick={handleCloseClick}
        headerLinkOptions={headerLinkOptions}
        renderLink={renderLink}
      />
    );
    expect(wrapper.find('.user-avatar').text()).toBe('FB');
  });

  it('should contain get started button if userName not provided', () => {
    const handleCloseClick = jest.fn();
    const wrapper = mount(
      <MobileMenu
        className="foo-bar"
        onCloseClick={handleCloseClick}
        renderLink={renderLink}
        headerLinkOptions={headerLinkOptions}
      />
    );
    expect(
      wrapper
        .find('.mobile-menu__header')
        .text()
        .toLowerCase()
    ).toBe('get started');
  });

  it('should handle logout', () => {
    const handleCloseClick = jest.fn();
    const wrapper = mount(
      <MobileMenu
        className="foo-bar"
        userName="Foo Bar"
        onCloseClick={handleCloseClick}
        headerLinkOptions={headerLinkOptions}
        renderLink={renderLink}
      />
    );
    wrapper.find('.mobile-menu__close-btn').simulate('click');
    expect(handleCloseClick).toBeCalled();
  });
});
