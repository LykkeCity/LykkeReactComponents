/// <reference types="react" />
import React from 'react';
import { HeaderLinkOptions } from './Header';
export interface MainMenuProps {
    activeItem?: string;
    className?: string;
    renderLink: (classes: string, title: JSX.Element, url: string) => void;
    headerLinkOptions: HeaderLinkOptions[];
    secondaryMenuItems: HeaderLinkOptions[];
    isSecondaryMenuShown: boolean;
}
export declare const MainMenu: React.SFC<MainMenuProps>;
export default MainMenu;
