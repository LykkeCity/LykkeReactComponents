import classnames from 'classnames';
import React from 'react';
import './style.css';

export enum ButtonType {
  Blue,
  Link,
  White
}

export enum ButtonSize {
  Large,
  Medium,
  Small,
  XSmall
}

export interface ButtonProps {
  onClick: () => void;
  className?: string;
  tag?: string;
  type?: ButtonType;
  size?: ButtonSize;
  isDisabled?: boolean;
  children: string;
}

const typeClasses = {
  [ButtonType.Blue]: 'btn--primary',
  [ButtonType.Link]: 'btn--link',
  [ButtonType.White]: 'btn--default'
};

const sizeClasses = {
  [ButtonSize.Large]: 'btn-lg',
  [ButtonSize.Medium]: 'btn-md',
  [ButtonSize.Small]: 'btn-sm',
  [ButtonSize.XSmall]: 'btn-xs'
};

export const Button: React.SFC<ButtonProps> = ({
  onClick,
  className,
  tag: Tag = 'div',
  /* istanbul ignore next */
  type = ButtonType.Blue,
  /* istanbul ignore next */
  size = ButtonSize.Medium,
  isDisabled,
  children,
  ...attributes
}) => {
  return (
    <Tag
      onClick={onClick}
      disabled={isDisabled}
      {...attributes}
      className={classnames(
        'btn',
        typeClasses[type],
        sizeClasses[size],
        className
      )}
    >
      {children}
    </Tag>
  );
};

export default Button;
