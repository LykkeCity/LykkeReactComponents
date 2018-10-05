/// <reference types="react" />
import React from 'react';
import { MenuItem } from './index';
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
    isBeta?: boolean;
}
export interface HeaderState {
    isMobileMenuVisible?: boolean;
}
export declare class Header extends React.Component<HeaderProps, HeaderState> {
    constructor(props: HeaderProps);
    render(): JSX.Element;
    renderUserDropdown: (isMobile: boolean, onLogout: () => void) => JSX.Element;
    private getLoginUrl;
    private toggleMobileMenu;
    private closeMobileMenu;
}
export default Header;
