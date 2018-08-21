/// <reference types="react" />
import React from 'react';
import './style.css';
export declare enum ListType {
    Ordered = 0,
    Unordered = 1,
}
export interface ListProps {
    options: any[];
    listType: ListType;
    className?: string;
}
export declare const List: React.SFC<ListProps>;
export default List;
