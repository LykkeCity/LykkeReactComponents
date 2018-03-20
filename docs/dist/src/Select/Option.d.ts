/// <reference types="react" />
import React from 'react';
import './style.css';
export interface OptionProps {
    className?: string;
    isFocused?: boolean;
    isSelected?: boolean;
    isVisible?: boolean;
    children?: React.ReactChild | React.ReactChild[];
    onMouseEnter?: () => void;
    onClick?: () => void;
}
export declare const Option: React.SFC<OptionProps>;
export default Option;
