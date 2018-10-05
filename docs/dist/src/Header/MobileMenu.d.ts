/// <reference types="react" />
import React from 'react';
import { HeaderLinkOptions } from './Header';
export interface MobileMenuProps {
    className?: string;
    userName?: string;
    onCloseClick: () => void;
    renderLink: (classes: string, title: JSX.Element, url: string) => void;
    headerLinkOptions: HeaderLinkOptions[];
    secondaryMenuItems: HeaderLinkOptions[];
    isSecondaryMenuShown: boolean;
    activeItem?: string;
}
export declare const MobileMenu: React.SFC<MobileMenuProps>;
export default MobileMenu;
