import classnames from 'classnames';
import React from 'react';
import {Icon} from '../Icon';
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
    /* istanbul ignore else */
    if (this.props.onToggle) {
      this.props.onToggle();
    }
  };

  render() {
    const {className, label, ...props} = this.props;
    const {checked} = this.state;

    return (
      <label
        className={classnames('lykke-checkbox-container', className)}
        {...props}
      >
        <input
          type="checkbox"
          className="lykke-checkbox"
          checked={checked}
          onChange={this.handleToggle}
        />
        <Icon type="check_thin" />
        <span>{label}</span>
      </label>
    );
  }
}

export default Checkbox;
