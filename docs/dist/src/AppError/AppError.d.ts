/// <reference types="react" />
import React from 'react';
import './style.css';
export interface AppErrorProps {
    reloadButtonText?: string;
    reloadButtonUrl?: string;
    className?: string;
    description?: string;
    statusText?: string;
    auxiliaryText?: string;
    email?: string;
    tag?: string;
}
export declare const AppError: React.SFC<AppErrorProps>;
export default AppError;
