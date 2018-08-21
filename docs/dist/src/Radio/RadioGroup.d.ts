/// <reference types="react" />
import React from 'react';
import './style.css';
export interface RadioButtonOption {
    value: string;
    text: string;
}
export interface RadioGroupProps {
    options: RadioButtonOption[];
    name: string;
    handleChange: (value: string) => void;
    checkedValue?: string;
    tag?: string;
    className?: string;
}
export interface RadioGroupState {
    currentValue?: string;
}
export declare class RadioGroup extends React.Component<RadioGroupProps, RadioGroupState> {
    constructor(props: RadioGroupProps);
    handleChange: (value: string) => void;
    render(): JSX.Element;
}
export default RadioGroup;
