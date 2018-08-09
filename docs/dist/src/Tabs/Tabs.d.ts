/// <reference types="react" />
import React from 'react';
export interface TabsProps {
    children: any;
    className?: string;
    tag?: string;
}
export interface TabsState {
    activeTab: number;
}
declare class Tabs extends React.Component<TabsProps, TabsState> {
    constructor(props: TabsProps);
    onTabChange(index: number): void;
    readonly tabs: never[];
    render(): JSX.Element;
}
export default Tabs;
