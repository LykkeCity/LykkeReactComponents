import classnames from 'classnames';
import React from 'react';
import {AppLinks} from './AppLinks';
import {GetStartedButton} from './GetStartedButton';
import {HeaderLinkOptions} from './Header';
import {MainMenu} from './MainMenu';
import {SecondaryMenu} from './SecondaryMenu';
import {UserAvatar} from './UserAvatar';

export interface MobileMenuProps {
  className?: string;
  userName?: string;
  onCloseClick: () => void;
  renderLink: (classes: string, title: JSX.Element, url: string) => void;
  headerLinkOptions: HeaderLinkOptions[];
  secondaryMenuItems: HeaderLinkOptions[];
  isSecondaryMenuShown: boolean;
  activeItem?: string;
}

export const MobileMenu: React.SFC<MobileMenuProps> = ({
  className,
  userName,
  onCloseClick,
  renderLink,
  headerLinkOptions,
  secondaryMenuItems,
  isSecondaryMenuShown,
  activeItem,
  ...attributes
}) => {
  const handleCloseClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onCloseClick();
  };

  return (
    <div {...attributes} className={classnames('mobile-menu', className)}>
      <div className="mobile-menu__header">
        <a
          href="#"
          onClick={handleCloseClick}
          className="mobile-menu__close-btn"
        />
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
      <div onClick={onCloseClick}>
        <MainMenu
          className="mobile-menu__main-menu"
          renderLink={renderLink}
          headerLinkOptions={headerLinkOptions}
          secondaryMenuItems={secondaryMenuItems}
          isSecondaryMenuShown={false}
          activeItem={activeItem}
        />
        {isSecondaryMenuShown && (
          <SecondaryMenu
            className="mobile-menu__secondary-menu"
            renderLink={renderLink}
            secondaryMenuItems={secondaryMenuItems}
            activeItem={activeItem}
          />
        )}
      </div>
    </div>
  );
};

export default MobileMenu;
