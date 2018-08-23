import React from 'react';
import Input, {InputProps} from '../Input';
import './style.css';

export interface PasswordInputState {
  type: string;
}

class PasswordInput extends React.Component<InputProps, PasswordInputState> {
  constructor(props: InputProps) {
    super(props);

    this.state = {
      type: 'password'
    };
  }

  togglePassword = () => {
    this.setState({
      type: this.state.type === 'password' ? 'text' : 'password'
    });
  };

  render() {
    return (
      <Input
        onChange={this.props.onChange}
        type={this.state.type}
        className={this.props.className}
      >
        <div className="lykke-password-toggle" onClick={this.togglePassword}>
          {this.state.type === 'password' ? (
            <i className="icon icon--show_password" />
          ) : (
            <i className="icon icon--hide_password" />
          )}
        </div>
      </Input>
    );
  }
}

export default PasswordInput;
