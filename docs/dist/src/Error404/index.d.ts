/// <reference types="react" />
import React from 'react';
import './style.css';
export interface Error404Props {
    buttonText?: string;
    buttonUrl?: string;
    className?: string;
    description?: string;
    email?: string;
    statusText?: string;
    tag?: string;
}
export declare const Error404: React.SFC<Error404Props>;
export default Error404;
