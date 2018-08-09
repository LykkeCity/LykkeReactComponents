import classnames from 'classnames';
import React from 'react';
import './style.css';

export interface TableProps {
  className?: string;
  responsive?: boolean;
  simple?: boolean;
  striped?: boolean;
  transparent?: boolean;
}

export const Table: React.SFC<TableProps> = ({
  className,
  responsive = false,
  simple = false,
  striped = false,
  transparent = false,
  children,
  ...attributes
}) => {
  const table = (
    <table
      {...attributes}
      className={classnames(
        'table',
        {
          'table--simple': simple,
          'table--transparent': transparent,
          'table-striped': striped
        },
        className
      )}
    >
      {children}
    </table>
  );

  return responsive ? <div className="table-responsive">{table}</div> : table;
};

export default Table;
