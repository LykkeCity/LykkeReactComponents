import classnames from 'classnames';
import React from 'react';

export interface ButtonProps {
  onClick: () => void;
  className?: string;
  tag?: string;
  children: string;
}

export const Button: React.SFC<ButtonProps> = ({
  onClick,
  className,
  tag: Tag = 'div',
  children,
  ...attributes
}) => {
  return (
    <Tag
      onClick={onClick}
      {...attributes}
      className={classnames('btn btn-primary', className)}
    >
      {children}
    </Tag>
  );
};

export default Button;
