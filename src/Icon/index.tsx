import classnames from 'classnames';
import React from 'react';
import './style.css';

export interface IconProps {
  className?: string;
  type: string;
}

export const Icon: React.SFC<IconProps> = ({
  className,
  type,
  ...attributes
}) => {
  return (
    <i
      {...attributes}
      className={classnames('icon', `icon--${type}`, className)}
    />
  );
};

export default Icon;
