/// <reference types="react" />
import React from 'react';
import { MenuItem } from './MainMenu';
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
export declare class Header extends React.Component<HeaderProps, HeaderState> {
    constructor(props: HeaderProps);
    render(): JSX.Element;
    private toggleMobileMenu;
}
export default Header;
