/// <reference types="react" />
import React from 'react';
import './style.css';
export interface SwitcherProps {
    checked: boolean;
    onToggle?: () => void;
    className?: string;
    label?: string | JSX.Element;
}
export interface SwitcherState {
    checked: boolean;
}
export declare class Switcher extends React.Component<SwitcherProps, SwitcherState> {
    constructor(props: SwitcherProps);
    handleToggle: () => void;
    render(): JSX.Element;
}
export default Switcher;
