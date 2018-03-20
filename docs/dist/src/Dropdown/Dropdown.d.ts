/// <reference types="react" />
import React from 'react';
import './style.css';
export interface DropdownProps {
    children?: React.ReactChild | React.ReactChild[];
    className?: string;
    isOpen?: boolean;
    onOpen?: () => void;
    tag?: string;
    trigger?: string;
}
export interface DropdownState {
    isOpen?: boolean;
}
export declare class Dropdown extends React.Component<DropdownProps, DropdownState> {
    constructor(props: DropdownProps);
    componentWillReceiveProps(nextProps: DropdownProps): void;
    handleClick: (e: MouseEvent | TouchEvent) => void;
    handleClickOutside: () => void;
    render(): JSX.Element;
}
export default Dropdown;
