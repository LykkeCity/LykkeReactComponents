import classnames from 'classnames';
import React from 'react';

export interface UserAvatarProps {
  userName: string;
  className?: string;
}

export const UserAvatar: React.SFC<UserAvatarProps> = ({
  userName,
  className,
  ...attributes
}) => {
  const names = userName.match(/\b\w/g) || [];
  const initials = ((names.shift() || '') + (names.pop() || '')).toUpperCase();

  return (
    <div {...attributes} className={classnames('user-avatar', className)}>
      {initials}
    </div>
  );
};

export default UserAvatar;
