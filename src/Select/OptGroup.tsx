import classnames from 'classnames';
import React from 'react';
import {DropdownListItem} from '../Dropdown/DropdownListItem';
import './style.css';

export interface OptGroupProps {
  className?: string;
  children?: React.ReactChild | React.ReactChild[];
  isVisible?: boolean;
}

export const OptGroup: React.SFC<OptGroupProps> = ({
  className,
  children,
  isVisible = true,
  ...attributes
}) => {
  return (
    <DropdownListItem
      className={isVisible ? '' : 'hidden'}
      isCategory={true}
      {...attributes}
    >
      <div className={classnames('select-dropdown__option-group', className)}>
        {children}
      </div>
    </DropdownListItem>
  );
};

export default OptGroup;
