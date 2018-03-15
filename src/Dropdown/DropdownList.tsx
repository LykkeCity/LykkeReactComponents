import classnames from 'classnames';
import React from 'react';
import './style.css';

export interface DropdownListProps {
  className?: string;
  tag?: string;
  children?: any;
}

export const DropdownList: React.SFC<DropdownListProps> = ({
  className,
  tag: Tag = 'ul',
  children,
  ...attributes
}) => {
  return (
    <Tag {...attributes} className={classnames('dropdown-list', className)}>
      {children}
    </Tag>
  );
};

export default DropdownList;
