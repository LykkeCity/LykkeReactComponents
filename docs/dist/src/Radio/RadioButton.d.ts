/// <reference types="react" />
import React from 'react';
import './style.css';
export interface RadioButtonProps {
    value: string;
    groupName: string;
    checked?: boolean;
    onChange?: (value: string) => void;
    className?: string;
    label?: string | JSX.Element;
}
export declare class RadioButton extends React.Component<RadioButtonProps> {
    constructor(props: RadioButtonProps);
    handleChange: () => void;
    render(): JSX.Element;
}
export default RadioButton;
