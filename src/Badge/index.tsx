import classnames from 'classnames';
import React from 'react';
import './style.css';

export interface BadgeProps {
  color: string;
  children: string;
  tag?: string;
  className?: string;
}

const Badge: React.SFC<BadgeProps> = ({
  color,
  children,
  /* istanbul ignore next */
  tag: Tag = 'div',
  className,
  ...attributes
}) => {
  return (
    <Tag {...attributes} className={classnames('badge', color, className)}>
      {children}
    </Tag>
  );
};

export default Badge;
