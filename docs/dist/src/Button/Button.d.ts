/// <reference types="react" />
import React from 'react';
import './style.css';
export declare enum ButtonType {
    Blue = 0,
    Link = 1,
    White = 2,
}
export declare enum ButtonSize {
    Large = 0,
    Medium = 1,
    Small = 2,
    XSmall = 3,
}
export interface ButtonProps {
    onClick: () => void;
    className?: string;
    tag?: string;
    type?: ButtonType;
    size?: ButtonSize;
    isDisabled?: boolean;
    children: string;
}
export declare const Button: React.SFC<ButtonProps>;
export default Button;
