/// <reference types="react" />
import React from 'react';
import './style.css';
export interface CheckboxProps {
    onToggle: (checked: boolean) => void;
    className?: string;
    defaultState?: boolean;
    label?: string | JSX.Element;
}
export interface CheckboxState {
    checked?: boolean;
}
export declare class Checkbox extends React.Component<CheckboxProps, CheckboxState> {
    constructor(props: CheckboxProps);
    componentWillReceiveProps(nextProps: CheckboxProps): void;
    handleToggle: (event: React.MouseEvent<HTMLElement>) => void;
    render(): React.ReactPortal;
}
export default Checkbox;
