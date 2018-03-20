/// <reference types="react" />
import React from 'react';
import './style.css';
export interface DropdownListItemProps {
    className?: string;
    isCategory?: boolean;
    tag?: string;
    children?: React.ReactChild | React.ReactChild[];
    onClick?: () => void;
}
export declare const DropdownListItem: React.SFC<DropdownListItemProps>;
export default DropdownListItem;
