import classnames from 'classnames';
import React from 'react';
import Icon from '../Icon';
import './style.css';

export interface AppErrorProps {
  buttonText?: string;
  buttonUrl?: string;
  className?: string;
  description?: string;
  statusText?: string;
  auxiliaryText?: string;
  email?: string;
  tag?: string;
}

export const AppError: React.SFC<AppErrorProps> = ({
  buttonText = 'Reload',
  buttonUrl = '/',
  className,
  description = 'There has been a small, temporary error with our system. Please choose one of the option below to reload the page.',
  statusText = 'Unexpected Error',
  auxiliaryText = 'If you have any other problem contact our support:',
  email = 'support@lykke.com',
  tag: Tag = 'div',
  ...attributes
}) => {
  return (
    <Tag {...attributes} className={classnames('error-404', className)}>
      <div className="app-error__status-code">
        <div className={'red_circle'}>
          <Icon type={'cancel'} className={'status_icon'} />
        </div>
      </div>
      {statusText && <h2 className="app-error__status-text">{statusText}</h2>}
      {description && <p className="app-error__description">{description}</p>}
      <div className="app-error__action text-center">
        <a href={buttonUrl} className="btn btn-sm">
          {buttonText}
        </a>
      </div>
      {auxiliaryText && (
        <div className="app-error__auxiliary-text text-center">
          <span>{auxiliaryText}</span>
          <br />
          <a href={`mailto:${email}`}>{email}</a>
        </div>
      )}
    </Tag>
  );
};

export default AppError;
