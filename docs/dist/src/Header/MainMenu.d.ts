/// <reference types="react" />
import React from 'react';
export declare enum MenuItem {
    Funds = "funds",
    Profile = "profile",
    Trade = "trade",
}
export interface MainMenuProps {
    activeItem?: string;
    className?: string;
}
export declare const MainMenu: React.SFC<MainMenuProps>;
export default MainMenu;
