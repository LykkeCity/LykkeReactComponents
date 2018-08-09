import classnames from 'classnames';
import React from 'react';
import './style.css';

export interface RadioButtonProps {
  value: string;
  groupName: string;
  checked?: boolean;
  onChange?: (value: string) => void;
  className?: string;
  label?: string | JSX.Element;
}

export class RadioButton extends React.Component<RadioButtonProps> {
  constructor(props: RadioButtonProps) {
    super(props);
  }

  handleChange = () => {
    /* istanbul ignore next */
    if (this.props.onChange) {
      this.props.onChange(this.props.value);
    }
  };

  render() {
    const {value, groupName, className, label} = this.props;

    return (
      <label className={classnames('radiobutton-container', className)}>
        <input
          type="radio"
          className="radiobutton"
          name={groupName}
          value={value}
          onChange={this.handleChange}
        />
        <span>{label}</span>
      </label>
    );
  }
}

export default RadioButton;
