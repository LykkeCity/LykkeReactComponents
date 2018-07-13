/// <reference types="react" />
import React from 'react';
import './style.css';
export interface DialogProps {
    className?: string;
    tag?: string;
    onCancel?: () => void;
    onConfirm?: () => void;
    visible?: boolean;
    closeable?: boolean;
    confirmButton?: {
        text: string;
    };
    cancelButton?: {
        text: string;
    };
    title?: string | JSX.Element;
    description?: string | JSX.Element;
    actions?: Array<{
        text: string;
        cssClass?: string;
        onClick: () => void;
    }>;
}
export interface DialogState {
    visible?: boolean;
}
export declare class Dialog extends React.Component<DialogProps, DialogState> {
    constructor(props: DialogProps);
    componentWillReceiveProps(nextProps: DialogProps): void;
    handleClickOutside: () => void;
    handleCancel: () => void;
    handleConfirm: () => void;
    render(): React.ReactPortal;
}
export default Dialog;
