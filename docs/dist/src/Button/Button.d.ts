/// <reference types="react" />
import React from 'react';
export interface ButtonProps {
    onClick: () => void;
    className?: string;
    tag?: string;
    children: string;
}
export declare const Button: React.SFC<ButtonProps>;
export default Button;
