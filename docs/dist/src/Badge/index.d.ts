/// <reference types="react" />
import React from 'react';
import './style.css';
export interface BadgeProps {
    color: string;
    children: string;
    tag?: string;
    className?: string;
}
declare const Badge: React.SFC<BadgeProps>;
export default Badge;
