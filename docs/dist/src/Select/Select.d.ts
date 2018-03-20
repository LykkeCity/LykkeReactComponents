/// <reference types="react" />
import React from 'react';
import './style.css';
export interface SelectProps {
    className?: string;
    labelKey: string;
    onChange?: any;
    optGroups?: Array<{
        label: string;
        options: any[];
    }>;
    optionRenderer?: (option: any) => any;
    options?: any[];
    placeholder?: string;
    searchPlaceholder?: string;
    selectRenderer?: (selectedOption?: any) => any;
    value?: string;
    valueKey: string;
}
export interface SelectState {
    isOpen: boolean;
    focusedOptionValue?: string;
    search: string;
    value?: string;
}
export declare class Select extends React.Component<SelectProps, SelectState> {
    private searchInput;
    readonly options: any[];
    readonly selectedOption: any;
    readonly visibleOptions: any[];
    readonly focusedOption: any;
    constructor(props: any);
    componentWillReceiveProps(nextProps: SelectProps): void;
    focusNext: () => void;
    focusPrev: () => void;
    handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    handleOptionMouseEnter: (option: any) => void;
    handleOptionClick: (option: any) => void;
    handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSelectOpen: () => void;
    render(): JSX.Element;
    private getOptionLabel;
    private getOptionValue;
    private isVisible;
    private renderOption;
}
export default Select;
