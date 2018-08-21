import classnames from 'classnames';
import React from 'react';

export interface GetStartedButtonProps {
  className?: string;
}

export const GetStartedButton: React.SFC<GetStartedButtonProps> = ({
  className,
  ...attributes
}) => {
  return (
    <div {...attributes} className={classnames('get-started-btn', className)}>
      <a href="http://lykke.com/site/signin" className="btn btn-primary">
        Get started
      </a>
    </div>
  );
};

export default GetStartedButton;
