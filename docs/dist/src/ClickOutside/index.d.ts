/// <reference types="react" />
import React from 'react';
export interface ClickOutsideProps {
    children?: React.ReactChild;
    onClickOutside?: () => void;
}
export declare class ClickOutside extends React.Component<ClickOutsideProps, {}> {
    constructor(props: ClickOutsideProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    handleDocumentClick: (e: MouseEvent | TouchEvent) => void;
    render(): JSX.Element;
}
export default ClickOutside;
