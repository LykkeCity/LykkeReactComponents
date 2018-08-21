import classNames from 'classnames';
import React from 'react';
import './style.css';

export interface InputProps {
  onChange: (value: string) => void;
  validate?: (value: string) => ValidationState;
  className?: string;
  type?: string;
  placeholder?: string;
  children?: any;
}

export interface ValidationState {
  errorMessage?: string;
  isValid: boolean;
}

class Input extends React.Component<InputProps, ValidationState> {
  constructor(props: InputProps) {
    super(props);

    this.state = {
      errorMessage: '',
      isValid: true
    };
  }

  handleChange = (event: any) => {
    this.props.onChange(event.target.value);

    if (this.props.validate) {
      this.setState(this.props.validate(event.target.value));
    }
  };

  render() {
    return (
      <div className={classNames('input-container', this.props.className)}>
        <div className="input-container__title">Name</div>
        <div
          className={classNames('input-container__field', {
            valid: this.state.isValid
          })}
        >
          <input
            type={this.props.type || 'text'}
            onChange={this.handleChange}
            placeholder={this.props.placeholder}
          />
        </div>
        {!this.state.isValid ? (
          <div className="input-container__validation-error">
            {this.state.errorMessage}
          </div>
        ) : null}
        {this.props.children}
      </div>
    );
  }
}

export default Input;
