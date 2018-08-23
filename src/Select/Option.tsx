import classnames from 'classnames';
import React from 'react';
import {DropdownListItem} from '../Dropdown/DropdownListItem';
import './style.css';

export interface OptionProps {
  className?: string;
  isFocused?: boolean;
  isSelected?: boolean;
  isVisible?: boolean;
  children?: React.ReactChild | React.ReactChild[];
  onMouseEnter?: () => void;
  onClick?: () => void;
}

export const Option: React.SFC<OptionProps> = ({
  className,
  isFocused = false,
  isSelected = false,
  isVisible = true,
  children,
  ...attributes
}) => {
  return (
    <DropdownListItem className={isVisible ? '' : 'hidden'} {...attributes}>
      <div
        className={classnames(
          'lykke-select-dropdown__option',
          {'lykke-select-dropdown__option_focused': isFocused},
          {'lykke-select-dropdown__option_selected': isSelected},
          className
        )}
      >
        {children}
      </div>
    </DropdownListItem>
  );
};

export default Option;
