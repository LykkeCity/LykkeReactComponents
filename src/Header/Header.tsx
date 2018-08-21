import classnames from 'classnames';
import React from 'react';
import {Dropdown, DropdownContainer, DropdownControl} from '../Dropdown';
import {AppLinks} from './AppLinks';
import {MainMenu, MenuItem} from './MainMenu';
import {MobileMenu} from './MobileMenu';
import {UserAvatar} from './UserAvatar';
import {UserMenu} from './UserMenu';

import './style.css';

export interface HeaderProps {
  className?: string;
  tag?: string;
  userName?: string;
  email?: string;
  onLogout: () => void;
  activeMenuItem?: MenuItem | string;
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
      ...props
    } = this.props;

    return (
      <Tag {...props} className={classnames('header', className)}>
        <div className="header__desktop-row">
          <div className="logo">
            <a href="/" />
          </div>
          <MainMenu className="header__main-menu" activeItem={activeMenuItem} />
          <div className="header__actions">
            <AppLinks className="header__app-links" />
            <div className="header__user-info">
              {userName ? (
                <Dropdown className="header__user-dropdown">
                  <DropdownControl>
                    <span className="header__user-name">{userName}</span>
                    <UserAvatar userName={userName} />
                  </DropdownControl>
                  <DropdownContainer>
                    <UserMenu
                      userName={userName}
                      email={email}
                      onLogout={this.props.onLogout}
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
        <div className="header__mobile-row">
          <a
            href="#"
            onClick={this.toggleMobileMenu}
            className="open-mobile-menu-btn"
          >
            {activeMenuItem}
          </a>
          {userName ? (
            <UserAvatar userName={userName} />
          ) : (
            <div className="header__mobile-get-started">
              <a
                href="http://lykke.com/site/signin"
                className="btn btn-primary"
              >
                Get started
              </a>
            </div>
          )}
        </div>
        <MobileMenu
          onCloseClick={this.toggleMobileMenu}
          userName={userName}
          className={classnames('header__mobile-menu', {
            'header__mobile-menu_active': this.state.isMobileMenuVisible
          })}
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
