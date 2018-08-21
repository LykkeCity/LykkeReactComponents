/// <reference types="react" />
import React from 'react';
export interface UserMenuProps {
    userName: string;
    email?: string;
    className?: string;
    onLogout: () => void;
}
export declare const UserMenu: React.SFC<UserMenuProps>;
export default UserMenu;
