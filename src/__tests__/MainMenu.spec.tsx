import {mount, shallow} from 'enzyme';
import React from 'react';
import {MainMenu, MenuItem} from '../Header/MainMenu';

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

describe('<MainMenu>', () => {
  it('should add custom class name', () => {
    const wrapper = shallow(
      <MainMenu
        className="foo-bar"
        renderLink={renderLink}
        headerLinkOptions={headerLinkOptions}
      />
    );
    expect(wrapper.find('.foo-bar').hostNodes()).toHaveLength(1);
  });

  it('should handle active item', () => {
    const wrapper = mount(
      <MainMenu
        className="foo-bar"
        activeItem="funds"
        renderLink={renderLink}
        headerLinkOptions={headerLinkOptions}
      />
    );
    expect(
      wrapper.find('.main-menu__item_funds.main-menu__item_active')
    ).toHaveLength(1);
    expect(
      wrapper.find('.main-menu__item_trade.main-menu__item_active')
    ).toHaveLength(0);
  });
});
