import classnames from 'classnames';
import React from 'react';
import {UserAvatar} from './UserAvatar';

export interface UserMenuProps {
  userName: string;
  email?: string;
  className?: string;
  onLogout: () => void;
}

export const UserMenu: React.SFC<UserMenuProps> = ({
  userName,
  email,
  onLogout,
  className,
  ...attributes
}) => {
  const handleLogoutClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onLogout();
  };

  return (
    <div {...attributes} className={classnames('user-menu', className)}>
      <div className="user-menu__actions">
        <a
          className="user-menu__sign-out"
          href="#"
          onClick={handleLogoutClick}
        />
      </div>
      <UserAvatar userName={userName} />
      <div className="user-menu__name">{userName}</div>
      {email && <div className="user-menu__email">{email}</div>}
    </div>
  );
};

export default UserMenu;
