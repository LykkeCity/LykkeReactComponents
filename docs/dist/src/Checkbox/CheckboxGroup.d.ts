/// <reference types="react" />
import React from 'react';
import './style.css';
export interface CheckboxGroupProps {
    children: any[];
    tag?: string;
    className?: string;
}
export declare class CheckboxGroup extends React.Component<CheckboxGroupProps> {
    constructor(props: CheckboxGroupProps);
    render(): JSX.Element;
}
export default CheckboxGroup;
