import classnames from 'classnames';
import React from 'react';
import './style.css';

export enum ListType {
  Ordered,
  Unordered
}

export interface ListProps {
  options: any[];
  listType: ListType;
  className?: string;
}

export const List: React.SFC<ListProps> = ({
  options,
  listType,
  className,
  ...attributes
}) => {
  const Tag = listType === ListType.Ordered ? 'ol' : 'ul';

  return (
    <Tag {...attributes} className={classnames('lykke-list', className)}>
      {options.map((option: any, index: number) => (
        <li className="lykke-list__item" key={`list-item-${index}`}>
          {option}
        </li>
      ))}
    </Tag>
  );
};

export default List;
