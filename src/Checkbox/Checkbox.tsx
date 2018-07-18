import classnames from 'classnames';
import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

export interface CheckboxProps {
  checked: boolean;
  onToggle?: () => void;
  className?: string;
  label?: string | JSX.Element;
}

export interface CheckboxState {
  checked: boolean;
}

export class Checkbox extends React.Component<CheckboxProps, CheckboxState> {
  constructor(props: CheckboxProps) {
    super(props);

    this.state = {
      checked: props.checked
    };
  }

  handleToggle = () => {
    this.setState({checked: !this.state.checked});
    if (this.props.onToggle) {
      this.props.onToggle();
    }
  };

  render() {
    const {className, label, ...props} = this.props;
    const {checked} = this.state;

    return ReactDOM.createPortal(
      <label className={classnames('checkbox-container', className)} {...props}>
        <input
          type="checkbox"
          className="checkbox"
          checked={checked}
          onChange={this.handleToggle}
        />
        <span>{label}</span>
      </label>,
      document.body
    ) as React.ReactPortal;
  }
}

export default Checkbox;
