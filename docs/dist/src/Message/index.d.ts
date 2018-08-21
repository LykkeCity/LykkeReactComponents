/// <reference types="react" />
import React from 'react';
import './style.css';
export declare enum MessageType {
    Note = 0,
    Identified = 1,
    Update = 2,
    Information = 3,
}
export interface MessageProps {
    type: MessageType;
    title?: string;
    subtitle?: string;
    className?: string;
}
export declare const Message: React.SFC<MessageProps>;
export default Message;
