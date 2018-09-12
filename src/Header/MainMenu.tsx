import classnames from 'classnames';
import React from 'react';
import {Dropdown, DropdownContainer, DropdownControl} from '../Dropdown';
import {HeaderLinkOptions} from './Header';
import {SecondaryMenu} from './SecondaryMenu';

export enum MenuItem {
  Funds = 'funds',
  Profile = 'profile',
  Trade = 'trade'
}

export interface MainMenuProps {
  activeItem?: string;
  className?: string;
  renderLink: (classes: string, title: JSX.Element, url: string) => void;
  headerLinkOptions: HeaderLinkOptions[];
}

export const MainMenu: React.SFC<MainMenuProps> = ({
  activeItem,
  className,
  renderLink,
  headerLinkOptions,
  ...attributes
}) => {
  return (
    <div {...attributes} className={classnames('main-menu', className)}>
      {headerLinkOptions.map(option => {
        return renderLink(
          classnames(`main-menu__item main-menu__item_${option.title}`, {
            'main-menu__item_active': activeItem === option.title
          }),
          <span className="main-menu__item-text">{option.title}</span>,
          option.url
        );
      })}
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
