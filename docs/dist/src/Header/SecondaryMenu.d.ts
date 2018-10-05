/// <reference types="react" />
import React from 'react';
import { HeaderLinkOptions } from './Header';
export interface SecondaryMenuProps {
    className?: string;
    renderLink: (classes: string, title: JSX.Element, url: string) => void;
    secondaryMenuItems: HeaderLinkOptions[];
    activeItem?: string;
    handleItemClick?: any;
}
export declare const SecondaryMenu: React.SFC<SecondaryMenuProps>;
export default SecondaryMenu;
