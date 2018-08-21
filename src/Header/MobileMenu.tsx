import classnames from 'classnames';
import React from 'react';
import {AppLinks} from './AppLinks';
import {MainMenu} from './MainMenu';
import {SecondaryMenu} from './SecondaryMenu';
import {UserAvatar} from './UserAvatar';

export interface MobileMenuProps {
  className?: string;
  userName?: string;
  onCloseClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const MobileMenu: React.SFC<MobileMenuProps> = ({
  className,
  userName,
  onCloseClick,
  ...attributes
}) => {
  return (
    <div {...attributes} className={classnames('mobile-menu', className)}>
      <div className="mobile-menu__header">
        <a href="#" onClick={onCloseClick} className="mobile-menu__close-btn" />
        {userName ? (
          <UserAvatar userName={userName} />
        ) : (
          <div className="mobile-menu__get-started">
            <a href="http://lykke.com/site/signin" className="btn btn-primary">
              Get started
            </a>
          </div>
        )}
      </div>
      <div className="mobile-menu__actions">
        <div className="logo">
          <a href="/" />
        </div>
        <AppLinks className="mobile-menu__app-links" />
      </div>
      <div className="secondary-menu__separator" />
      <MainMenu className="mobile-menu__main-menu" />
      <SecondaryMenu className="mobile-menu__secondary-menu" />
    </div>
  );
};

export default MobileMenu;
