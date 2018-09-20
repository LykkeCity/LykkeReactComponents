/// <reference types="react" />
import React from 'react';
import { HeaderLinkOptions } from './Header';
export declare enum MenuItem {
    Funds = "funds",
    Settings = "settings",
    Trade = "trade",
}
export interface MainMenuProps {
    activeItem?: string;
    className?: string;
    renderLink: (classes: string, title: JSX.Element, url: string) => void;
    headerLinkOptions: HeaderLinkOptions[];
}
export declare const MainMenu: React.SFC<MainMenuProps>;
export default MainMenu;
