import classnames from 'classnames';
import React from 'react';
import {Dropdown, DropdownContainer, DropdownControl} from '../Dropdown';
import {AppLinks} from './AppLinks';
import {GetStartedButton} from './GetStartedButton';
import {MainMenu, MenuItem} from './MainMenu';
import {MobileMenu} from './MobileMenu';
import {UserAvatar} from './UserAvatar';
import {UserMenu} from './UserMenu';

import './style.css';

export interface HeaderLinkOptions {
  title: MenuItem;
  url: string;
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
      email,
      activeMenuItem,
      onLogout,
      renderLink,
      headerLinkOptions,
      getStartedUrl,
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
          />
          <div className="lykke-header__actions">
            <AppLinks className="lykke-header__app-links" />
            <div className="lykke-header__user-info">
              {userName ? (
                <Dropdown className="lykke-header__user-dropdown">
                  <DropdownControl>
                    <span className="lykke-header__user-name">{userName}</span>
                    <UserAvatar userName={userName} />
                  </DropdownControl>
                  <DropdownContainer>
                    <UserMenu
                      userName={userName}
                      email={email}
                      onLogout={onLogout}
                    />
                  </DropdownContainer>
                </Dropdown>
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
          {userName ? (
            <Dropdown className="lykke-header__user-dropdown">
              <DropdownControl>
                <UserAvatar userName={userName} />
              </DropdownControl>
              <DropdownContainer>
                <UserMenu
                  userName={userName}
                  email={email}
                  onLogout={onLogout}
                />
              </DropdownContainer>
            </Dropdown>
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
        />
      </Tag>
    );
  }

  private toggleMobileMenu = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    this.setState(prevState => ({
      isMobileMenuVisible: !prevState.isMobileMenuVisible
    }));
  };
}

export default Header;
