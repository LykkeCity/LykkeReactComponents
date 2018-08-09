import React from 'react';
import {RadioButton} from './RadioButton';
import './style.css';

export interface RadioButtonOption {
  value: string;
  text: string;
}

export interface RadioGroupProps {
  options: RadioButtonOption[];
  name: string;
  handleChange: (value: string) => void;
  checkedValue?: string;
  tag?: string;
  className?: string;
}

export interface RadioGroupState {
  currentValue?: string;
}

export class RadioGroup extends React.Component<
  RadioGroupProps,
  RadioGroupState
> {
  constructor(props: RadioGroupProps) {
    super(props);

    if (this.props.checkedValue) {
      this.state = {
        currentValue: props.checkedValue
      };
    } else {
      this.state = {};
    }
  }

  handleChange = (value: string) => {
    this.setState({currentValue: value});
    this.props.handleChange(value);
  };

  render() {
    const {
      options,
      name,
      className,
      /* istanbul ignore next */
      tag: Tag = 'div'
    } = this.props;
    const currentValue = this.state.currentValue;

    return (
      <Tag className={className}>
        {options.map((option: any, index: number) => (
          <RadioButton
            value={option.value}
            groupName={name}
            checked={currentValue === option.value}
            label={option.text}
            onChange={this.handleChange}
            key={`${option.value}-${index}`}
          />
        ))}
      </Tag>
    );
  }
}

export default RadioGroup;
