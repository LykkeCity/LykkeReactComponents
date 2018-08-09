/// <reference types="react" />
import React from 'react';
import './style.css';
export interface InputProps {
    onChange: (value: string) => void;
    validate?: (value: string) => ValidationState;
    className?: string;
    type?: string;
    placeholder?: string;
    children?: any;
}
export interface ValidationState {
    errorMessage?: string;
    isValid: boolean;
}
declare class Input extends React.Component<InputProps, ValidationState> {
    constructor(props: InputProps);
    handleChange: (event: any) => void;
    render(): JSX.Element;
}
export default Input;
