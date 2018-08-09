import classnames from 'classnames';
import React from 'react';
import './style.css';

export interface SwitcherProps {
  checked: boolean;
  onToggle?: () => void;
  className?: string;
  label?: string | JSX.Element;
}

export interface SwitcherState {
  checked: boolean;
}

export class Switcher extends React.Component<SwitcherProps, SwitcherState> {
  constructor(props: SwitcherProps) {
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
      <label className={classnames('switcher-container', className)} {...props}>
        <input
          type="checkbox"
          className="switcher"
          checked={checked}
          onChange={this.handleToggle}
        />
        <span>{label}</span>
      </label>
    );
  }
}

export default Switcher;
