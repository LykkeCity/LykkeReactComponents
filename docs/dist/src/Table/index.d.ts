/// <reference types="react" />
import React from 'react';
import './style.css';
export interface TableProps {
    className?: string;
    responsive?: boolean;
    simple?: boolean;
    striped?: boolean;
    transparent?: boolean;
}
export declare const Table: React.SFC<TableProps>;
export default Table;
