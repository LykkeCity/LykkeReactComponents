import classnames from 'classnames';
import React from 'react';
import {Dropdown, DropdownContainer, DropdownControl} from '../Dropdown';
import {HeaderLinkOptions} from './Header';
import {SecondaryMenu} from './SecondaryMenu';

export enum MenuItem {
  Funds = 'funds',
  Settings = 'settings',
  Trade = 'trade',
  LykkeStreams = 'lykke streams',
  BlockchainExplorer = 'blockchain explorer',
  Assets = 'assets',
  ApiKeys = 'api keys',
  FeesAndLimits = 'fees and limits'
}

export interface MainMenuProps {
  activeItem?: string;
  className?: string;
  renderLink: (classes: string, title: JSX.Element, url: string) => void;
  headerLinkOptions: HeaderLinkOptions[];
  secondaryMenuItems: HeaderLinkOptions[];
  isSecondaryMenuShown: boolean;
}

export const MainMenu: React.SFC<MainMenuProps> = ({
  activeItem,
  className,
  renderLink,
  headerLinkOptions,
  secondaryMenuItems,
  isSecondaryMenuShown,
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
      {isSecondaryMenuShown && (
        <Dropdown className="more-dropdown">
          <DropdownControl>
            <div className="main-menu__item main-menu__item_more">
              <a href="#">
                <span className="main-menu__item-text">More</span>
              </a>
            </div>
          </DropdownControl>
          <DropdownContainer>
            <div className="more-dropdown">
              <SecondaryMenu
                renderLink={renderLink}
                secondaryMenuItems={secondaryMenuItems}
              />
            </div>
          </DropdownContainer>
        </Dropdown>
      )}
    </div>
  );
};

export default MainMenu;
