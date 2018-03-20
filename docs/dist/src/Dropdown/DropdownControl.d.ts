/// <reference types="react" />
import React from 'react';
import './style.css';
export interface DropdownControlProps {
    className?: string;
    tag?: string;
    children?: React.ReactChild | React.ReactChild[];
}
export declare const DropdownControl: React.SFC<DropdownControlProps>;
export default DropdownControl;
