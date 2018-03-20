/// <reference types="react" />
import React from 'react';
import './style.css';
export interface DropdownContainerProps {
    className?: string;
    tag?: string;
    children?: React.ReactChild | React.ReactChild[];
}
export declare const DropdownContainer: React.SFC<DropdownContainerProps>;
export default DropdownContainer;
