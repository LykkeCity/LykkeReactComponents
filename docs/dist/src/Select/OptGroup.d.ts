/// <reference types="react" />
import React from 'react';
import './style.css';
export interface OptGroupProps {
    className?: string;
    children?: React.ReactChild | React.ReactChild[];
    isVisible?: boolean;
}
export declare const OptGroup: React.SFC<OptGroupProps>;
export default OptGroup;
