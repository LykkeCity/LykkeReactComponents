/// <reference types="react" />
import React from 'react';
export interface MobileMenuProps {
    className?: string;
    userName?: string;
    onCloseClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}
export declare const MobileMenu: React.SFC<MobileMenuProps>;
export default MobileMenu;
