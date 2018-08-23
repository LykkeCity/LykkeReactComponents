import classNames from 'classnames';
import React from 'react';
import './style.css';

export interface CheckboxGroupProps {
  children: any[];
  tag?: string;
  className?: string;
}

export class CheckboxGroup extends React.Component<CheckboxGroupProps> {
  constructor(props: CheckboxGroupProps) {
    super(props);
  }

  render() {
    const {
      children,
      className,
      /* istanbul ignore next */
      tag: Tag = 'ul'
    } = this.props;

    return (
      <Tag className={classNames('lykke-checkbox-group', className)}>
        {children.map((checkbox: any, index: number) => (
          <li className="lykke-checkbox-group__item" key={`checkbox-${index}`}>
            {checkbox}
          </li>
        ))}
      </Tag>
    );
  }
}

export default CheckboxGroup;
