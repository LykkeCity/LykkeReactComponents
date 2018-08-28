import classnames from 'classnames';
import React from 'react';
import {Dropdown, DropdownContainer, DropdownControl} from '../Dropdown';
import {SecondaryMenu} from './SecondaryMenu';

export enum MenuItem {
  Funds = 'funds',
  Profile = 'profile',
  Trade = 'trade'
}

export interface MainMenuProps {
  activeItem?: string;
  className?: string;
}

export const MainMenu: React.SFC<MainMenuProps> = ({
  activeItem,
  className,
  ...attributes
}) => {
  return (
    <div {...attributes} className={classnames('main-menu', className)}>
      <a
        href="http://trade.lykke.com"
        className={classnames('main-menu__item main-menu__item_trade', {
          'main-menu__item_active': activeItem === MenuItem.Trade
        })}
      >
        <span className="main-menu__item-text">Trade</span>
      </a>
      <a
        href="http://wallet.lykke.com"
        className={classnames('main-menu__item main-menu__item_funds', {
          'main-menu__item_active': activeItem === MenuItem.Funds
        })}
      >
        <span className="main-menu__item-text">Funds</span>
      </a>
      <a
        href="#"
        className={classnames(
          'main-menu__item main-menu__item_profile',
          {'main-menu__item_active': activeItem === MenuItem.Profile},
          'hidden'
        )}
      >
        <span className="main-menu__item-text">Profile</span>
      </a>
      <Dropdown className="more-dropdown">
        <DropdownControl>
          <div className="main-menu__item main-menu__item_more hidden">
            <a href="#">
              <span className="main-menu__item-text">More</span>
            </a>
          </div>
        </DropdownControl>
        <DropdownContainer>
          <div className="more-dropdown">
            <SecondaryMenu />
          </div>
        </DropdownContainer>
      </Dropdown>
    </div>
  );
};

export default MainMenu;
