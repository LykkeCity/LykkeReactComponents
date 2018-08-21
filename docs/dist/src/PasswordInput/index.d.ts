/// <reference types="react" />
import React from 'react';
import { InputProps } from '../Input';
import './style.css';
export interface PasswordInputState {
    type: string;
}
declare class PasswordInput extends React.Component<InputProps, PasswordInputState> {
    constructor(props: InputProps);
    togglePassword: () => void;
    render(): JSX.Element;
}
export default PasswordInput;
