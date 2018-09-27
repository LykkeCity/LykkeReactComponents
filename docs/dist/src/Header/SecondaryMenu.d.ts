/// <reference types="react" />
import React from 'react';
import { HeaderLinkOptions } from './Header';
export interface SecondaryMenuProps {
    className?: string;
    renderLink: any;
    secondaryMenuItems: HeaderLinkOptions[];
}
export declare const SecondaryMenu: React.SFC<SecondaryMenuProps>;
export default SecondaryMenu;
