import classnames from 'classnames';
import React from 'react';
import './style.css';

export enum MessageType {
  Note,
  Identified,
  Update,
  Information
}

export interface MessageProps {
  type: MessageType;
  title?: string;
  subtitle?: string;
  className?: string;
}

const typeClasses = {
  [MessageType.Note]: 'note',
  [MessageType.Identified]: 'identified',
  [MessageType.Update]: 'update',
  [MessageType.Information]: 'information'
};

const typeTitle = {
  [MessageType.Note]: 'Note',
  [MessageType.Identified]: 'Identified',
  [MessageType.Update]: 'Update',
  [MessageType.Information]: 'Information'
};

export const Message: React.SFC<MessageProps> = ({
  type,
  title,
  subtitle,
  className,
  children,
  ...attributes
}) => {
  return (
    <div
      {...attributes}
      className={classnames('lykke-message', typeClasses[type], className)}
    >
      <div className="lykke-message__title">
        {title || typeTitle[type]}
        {subtitle ? (
          <span className="lykke-message__subtitle"> ⋅ {subtitle}</span>
        ) : null}
      </div>
      <div className="lykke-message__text">{children}</div>
    </div>
  );
};

export default Message;
