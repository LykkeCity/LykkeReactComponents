import classnames from 'classnames';
import React from 'react';
import {
  Dropdown,
  DropdownContainer,
  DropdownControl,
  DropdownList
} from '../Dropdown';
import {escapeRegExp} from '../utils';
import {OptGroup} from './OptGroup';
import {Option} from './Option';

import './style.css';

export interface SelectProps {
  className?: string;
  labelKey: string;
  onChange?: any;
  optGroups?: Array<{label: string; options: any[]}>;
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

export class Select extends React.Component<SelectProps, SelectState> {
  private searchInput: HTMLInputElement | null;

  get options(): any[] {
    if (this.props.optGroups) {
      return this.props.optGroups.reduce(
        (prev, optGroup) => {
          return prev.concat(optGroup.options);
        },
        [] as any[]
      );
    }

    return this.props.options || [];
  }

  get selectedOption(): any {
    return this.options.find(o => this.getOptionValue(o) === this.state.value);
  }

  get visibleOptions(): any[] {
    return this.options.filter(o => this.isVisible(o));
  }

  get focusedOption(): any {
    return this.visibleOptions.find(
      o => this.getOptionValue(o) === this.state.focusedOptionValue
    );
  }

  constructor(props: any) {
    super(props);

    this.state = {
      isOpen: false,
      search: '',
      value: this.props.value || ''
    };
  }

  componentWillReceiveProps(nextProps: SelectProps) {
    /* istanbul ignore else */
    if (nextProps.value !== this.state.value) {
      this.setState({value: nextProps.value});
    }
  }

  focusNext = () => {
    if (this.focusedOption) {
      const focusedIndex = this.visibleOptions.findIndex(
        o => o === this.focusedOption
      );
      const nextOption =
        focusedIndex < this.visibleOptions.length - 1
          ? this.visibleOptions[focusedIndex + 1]
          : this.visibleOptions[0];

      this.setState({
        focusedOptionValue: this.getOptionValue(nextOption)
      });
    } else if (this.visibleOptions.length > 0) {
      this.setState({
        focusedOptionValue: this.getOptionValue(this.visibleOptions[0])
      });
    }
  };

  focusPrev = () => {
    /* istanbul ignore else */
    if (this.focusedOption) {
      const focusedIndex = this.visibleOptions.findIndex(
        o => o === this.focusedOption
      );
      const prevOption =
        focusedIndex > 0
          ? this.visibleOptions[focusedIndex - 1]
          : this.visibleOptions[this.visibleOptions.length - 1];

      this.setState({
        focusedOptionValue: this.getOptionValue(prevOption)
      });
    } else if (this.visibleOptions.length > 0) {
      this.setState({
        focusedOptionValue: this.getOptionValue(this.visibleOptions[0])
      });
    }
  };

  handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const handlers = {
      ArrowDown: () => {
        e.preventDefault();
        e.stopPropagation();

        this.focusNext();
      },
      ArrowUp: () => {
        e.preventDefault();
        e.stopPropagation();

        this.focusPrev();
      },
      Enter: () => {
        e.preventDefault();
        e.stopPropagation();

        /* istanbul ignore else */
        if (this.focusedOption) {
          this.handleOptionClick(this.focusedOption);
        }
      },
      Escape: () => {
        this.setState({
          isOpen: false
        });
      }
    };

    /* istanbul ignore else */
    if (!!handlers[e.key]) {
      handlers[e.key]();
    }
  };

  handleOptionMouseEnter = (option: any) => {
    this.setState({
      focusedOptionValue: this.getOptionValue(option)
    });
  };

  handleOptionClick = (option: any) => {
    this.setState({
      isOpen: false,
      value: this.getOptionValue(option)
    });

    if (this.props.onChange) {
      this.props.onChange(option);
    }
  };

  handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState(
      {
        search: e.target.value
      },
      () => {
        this.setState({
          focusedOptionValue: this.getOptionValue(this.visibleOptions[0])
        });
      }
    );
  };

  handleSelectOpen = () => {
    this.setState(
      prevState => ({
        focusedOptionValue:
          prevState.value || this.getOptionValue(this.visibleOptions[0]),
        isOpen: true,
        search: ''
      }),
      () => {
        if (!!this.searchInput) {
          this.searchInput.focus();
        }
      }
    );
  };

  handleSelectClose = () => {
    this.setState({
      isOpen: false
    });
  };

  render() {
    const {
      className,
      optGroups,
      options,
      placeholder,
      searchPlaceholder,
      selectRenderer
    } = this.props;

    return (
      <Dropdown
        trigger="click"
        className={classnames('select-dropdown', className)}
        isOpen={this.state.isOpen}
        onOpen={this.handleSelectOpen}
        onClose={this.handleSelectClose}
      >
        <DropdownControl className="select-dropdown__control">
          {this.selectedOption ? (
            selectRenderer ? (
              selectRenderer(this.selectedOption)
            ) : (
              <div>{this.getOptionLabel(this.selectedOption)}</div>
            )
          ) : (
            placeholder && (
              <span className="select-dropdown__placeholder">
                {placeholder}
              </span>
            )
          )}
          <span className="icon icon--chevron-thin-down pull-right" />
        </DropdownControl>
        <DropdownContainer className="select-dropdown__container">
          <div className="select-dropdown__search">
            <input
              type="text"
              className="form-control"
              placeholder={searchPlaceholder}
              onChange={this.handleSearchChange}
              onKeyDown={this.handleKeyDown}
              value={this.state.search}
              ref={input => {
                this.searchInput = input;
              }}
            />
          </div>
          <DropdownList>
            {optGroups &&
              optGroups.map(optGroup => [
                <OptGroup
                  isVisible={optGroup.options.some(o => this.isVisible(o))}
                  key={optGroup.label}
                >
                  {optGroup.label}
                </OptGroup>,
                optGroup.options.map(this.renderOption)
              ])}
            {options && options.map(this.renderOption)}
          </DropdownList>
        </DropdownContainer>
      </Dropdown>
    );
  }

  private getOptionLabel = (option: any) =>
    String(option && option[this.props.labelKey]);

  private getOptionValue = (option: any) =>
    option && option[this.props.valueKey];

  private isVisible = (option: any) => {
    return !!this.getOptionLabel(option).match(
      new RegExp(escapeRegExp(this.state.search), 'i')
    );
  };

  private renderOption = (option: any) => {
    const {optionRenderer} = this.props;

    return (
      <Option
        key={this.getOptionValue(option)}
        isFocused={this.focusedOption === option}
        isSelected={this.selectedOption === option}
        isVisible={this.isVisible(option)}
        // tslint:disable-next-line:jsx-no-lambda
        onMouseEnter={() => this.handleOptionMouseEnter(option)}
        // tslint:disable-next-line:jsx-no-lambda
        onClick={() => this.handleOptionClick(option)}
      >
        {optionRenderer ? (
          optionRenderer(option)
        ) : (
          <a>{this.getOptionLabel(option)}</a>
        )}
      </Option>
    );
  };
}

export default Select;
