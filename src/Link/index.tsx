import classnames from 'classnames';
import React from 'react';
import './style.css';

export enum LinkColor {
  Blue,
  Gray,
  Black
}

export interface LinkProps {
  href: string;
  color?: LinkColor;
  className?: string;
  children: string;
}

const typeClasses = {
  [LinkColor.Blue]: 'blue',
  [LinkColor.Gray]: 'gray',
  [LinkColor.Black]: 'black'
};

export const Link: React.SFC<LinkProps> = ({
  href,
  /* istanbul ignore next */
  color = LinkColor.Blue,
  className,
  children,
  ...attributes
}) => {
  return (
    <a
      href={href}
      {...attributes}
      className={classnames('link', typeClasses[color], className)}
    >
      {children}
    </a>
  );
};

export default Link;
