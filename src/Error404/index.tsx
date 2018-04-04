import classnames from 'classnames';
import React from 'react';
import './style.css';

export interface Error404Props {
  buttonText?: string;
  buttonUrl?: string;
  className?: string;
  description?: string;
  email?: string;
  statusText?: string;
  tag?: string;
}

export const Error404: React.SFC<Error404Props> = ({
  buttonText = 'Go Home',
  buttonUrl = '/',
  className,
  description = 'This content has been moved or is no longer available. If you have any other problem contact our support:',
  email = 'support@lykke.com',
  statusText = 'Oops! Page not found',
  tag: Tag = 'div',
  ...attributes
}) => {
  return (
    <Tag {...attributes} className={classnames('error-404', className)}>
      <div className="error-404__status-code">
        4<span className="status_icon status_icon--warning" />4
      </div>
      {statusText && <h2 className="error-404__status-text">{statusText}</h2>}
      {description && (
        <p className="error-404__description">
          {description} {email && <a href={`mailto:${email}`}>{email}</a>}
        </p>
      )}
      <div className="error-404__action text-center">
        <a href={buttonUrl} className="btn btn-sm">
          {buttonText}
        </a>
      </div>
    </Tag>
  );
};

export default Error404;
