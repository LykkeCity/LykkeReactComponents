/// <reference types="react" />
import React from 'react';
import './style.css';
export declare enum LinkColor {
    Blue = 0,
    Gray = 1,
    Black = 2,
}
export interface LinkProps {
    href: string;
    color?: LinkColor;
    className?: string;
    children: string;
}
export declare const Link: React.SFC<LinkProps>;
export default Link;
