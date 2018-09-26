import classnames from 'classnames';
import React from 'react';

export interface GetStartedButtonProps {
  className?: string;
  url?: string;
}

export const GetStartedButton: React.SFC<GetStartedButtonProps> = ({
  className,
  url,
  ...attributes
}) => {
  return (
    <div {...attributes} className={classnames('get-started-btn', className)}>
      <a href={url} className="btn btn-primary">
        Get started
      </a>
    </div>
  );
};

export default GetStartedButton;
