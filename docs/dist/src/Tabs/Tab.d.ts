/// <reference types="react" />
import React from 'react';
import './style.css';
export interface TabProps {
    title: string;
    className?: string;
    tag?: string;
}
declare const Tab: React.SFC<TabProps>;
export default Tab;
