import classnames from 'classnames';
import React from 'react';
import {AppLinks} from './AppLinks';
import {GetStartedButton} from './GetStartedButton';
import {HeaderLinkOptions} from './Header';
import {MainMenu, MenuItem} from './MainMenu';
import {SecondaryMenu} from './SecondaryMenu';
import {UserAvatar} from './UserAvatar';

export interface MobileMenuProps {
  className?: string;
  userName?: string;
  onCloseClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  renderLink: (classes: string, title: JSX.Element, menuItem: MenuItem) => void;
  headerLinkOptions: HeaderLinkOptions[];
}

export const MobileMenu: React.SFC<MobileMenuProps> = ({
  className,
  userName,
  onCloseClick,
  renderLink,
  headerLinkOptions,
  ...attributes
}) => {
  return (
    <div {...attributes} className={classnames('mobile-menu', className)}>
      <div className="mobile-menu__header">
        <a href="#" onClick={onCloseClick} className="mobile-menu__close-btn" />
        {userName ? (
          <UserAvatar userName={userName} />
        ) : (
          <GetStartedButton className="mobile-menu__get-started" />
        )}
      </div>
      <div className="mobile-menu__actions">
        <div className="logo">
          <a href="/" />
        </div>
        <AppLinks className="mobile-menu__app-links" />
      </div>
      <div className="secondary-menu__separator" />
      <MainMenu
        className="mobile-menu__main-menu"
        renderLink={renderLink}
        headerLinkOptions={headerLinkOptions}
      />
      <SecondaryMenu className="mobile-menu__secondary-menu" />
    </div>
  );
};

export default MobileMenu;
