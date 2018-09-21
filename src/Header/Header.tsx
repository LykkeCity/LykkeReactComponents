import classnames from 'classnames';
import React from 'react';
import {Dropdown, DropdownContainer, DropdownControl} from '../Dropdown';
import {GetStartedButton} from './GetStartedButton';
import {MenuItem} from './index';
import {MainMenu} from './MainMenu';
import {MobileMenu} from './MobileMenu';
import {UserAvatar} from './UserAvatar';
import {UserMenu} from './UserMenu';

import './style.css';

export interface HeaderLinkOptions {
  iconName?: string;
  title: MenuItem;
  url?: string;
}

export interface HeaderProps {
  className?: string;
  tag?: string;
  userName?: string;
  email?: string;
  onLogout: () => void;
  activeMenuItem?: MenuItem | string;
  renderLink: (classes: string, title: JSX.Element, url: string) => void;
  headerLinkOptions: HeaderLinkOptions[];
  getStartedUrl?: string;
  secondaryMenuLinkOptions?: HeaderLinkOptions[];
  isAuth: boolean;
  isSecondaryMenuShown?: boolean;
}

export interface HeaderState {
  isMobileMenuVisible?: boolean;
}

export class Header extends React.Component<HeaderProps, HeaderState> {
  constructor(props: HeaderProps) {
    super(props);

    this.state = {
      isMobileMenuVisible: false
    };
  }

  render() {
    const {
      className,
      tag: Tag = 'div',
      userName,
      activeMenuItem,
      renderLink,
      headerLinkOptions,
      getStartedUrl,
      secondaryMenuLinkOptions = [],
      isAuth,
      isSecondaryMenuShown = false,
      onLogout,
      ...props
    } = this.props;

    return (
      <Tag {...props} className={classnames('lykke-header', className)}>
        <div className="lykke-header__desktop-row">
          <div className="logo">
            <a href="/" />
          </div>
          <MainMenu
            className="lykke-header__main-menu"
            activeItem={activeMenuItem}
            headerLinkOptions={headerLinkOptions}
            renderLink={renderLink}
            secondaryMenuItems={secondaryMenuLinkOptions}
            isSecondaryMenuShown={isSecondaryMenuShown}
          />
          <div className="lykke-header__actions">
            <div className="lykke-header__user-info">
              {userName ? (
                this.renderUserDropdown(false, onLogout)
              ) : (
                <a
                  href="http://lykke.com/site/signin"
                  className="btn btn-primary"
                >
                  Get started
                </a>
              )}
            </div>
          </div>
        </div>
        <div className="lykke-header__mobile-row">
          <a
            href="#"
            onClick={this.toggleMobileMenu}
            className="open-mobile-menu-btn"
          >
            {activeMenuItem}
          </a>
          {isAuth ? (
            userName ? (
              this.renderUserDropdown(true, onLogout)
            ) : null
          ) : (
            <GetStartedButton
              className="lykke-header__mobile-get-started"
              url={getStartedUrl}
            />
          )}
        </div>
        <MobileMenu
          onCloseClick={this.toggleMobileMenu}
          userName={userName}
          className={classnames('lykke-header__mobile-menu', {
            'lykke-header__mobile-menu_active': this.state.isMobileMenuVisible
          })}
          headerLinkOptions={headerLinkOptions}
          renderLink={renderLink}
          secondaryMenuItems={secondaryMenuLinkOptions}
          isSecondaryMenuShown={isSecondaryMenuShown}
        />
      </Tag>
    );
  }

  renderUserDropdown = (isMobile: boolean, onLogout: () => void) => {
    const {userName, email} = this.props;
    return (
      <Dropdown className="lykke-header__user-dropdown">
        <DropdownControl>
          {!isMobile ? (
            <span className="lykke-header__user-name">{userName}</span>
          ) : (
            <span />
          )}
          <UserAvatar userName={userName!} />
        </DropdownControl>
        <DropdownContainer>
          <UserMenu userName={userName!} email={email} onLogout={onLogout} />
        </DropdownContainer>
      </Dropdown>
    );
  };

  private toggleMobileMenu = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    this.setState(prevState => ({
      isMobileMenuVisible: !prevState.isMobileMenuVisible
    }));
  };
}

export default Header;
