/// <reference types="react" />
import React from 'react';
import './style.css';
export interface CheckboxProps {
    checked: boolean;
    onToggle?: () => void;
    className?: string;
    label?: string | JSX.Element;
}
export interface CheckboxState {
    checked: boolean;
}
export declare class Checkbox extends React.Component<CheckboxProps, CheckboxState> {
    constructor(props: CheckboxProps);
    handleToggle: () => void;
    render(): JSX.Element;
}
export default Checkbox;
