import classNames from 'classnames';
import React from 'react';
import './style.css';

export interface TabProps {
  title: string;
  className?: string;
  tag?: string;
}

const Tab: React.SFC<TabProps> = ({
  children,
  className,
  /* istanbul ignore next */
  tag: Tag = 'div'
}) => {
  return <Tag className={classNames('lykke-tab', className)}>{children}</Tag>;
};

export default Tab;
