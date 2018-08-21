import classnames from 'classnames';
import React from 'react';
import {Social} from '../Social';

export interface SecondaryMenuProps {
  className?: string;
}

export const SecondaryMenu: React.SFC<SecondaryMenuProps> = ({
  className,
  ...attributes
}) => {
  return (
    <div {...attributes} className={classnames('secondary-menu', className)}>
      <div className="secondary-menu__item secondary-menu__item_lykke-streams hidden">
        <a href="#">Lykke Streams</a>
      </div>
      <div className="secondary-menu__item secondary-menu__item_blockchain-explorer hidden">
        <a href="#">Blockchain Explorer</a>
      </div>
      <div className="secondary-menu__separator hidden" />
      <div className="secondary-menu__item secondary-menu__item_no-image hidden">
        <a href="#">Assets</a>
      </div>
      <div className="secondary-menu__item secondary-menu__item_no-image hidden">
        <a href="#">API Keys</a>
      </div>
      <div className="secondary-menu__item secondary-menu__item_no-image hidden">
        <a href="#">About Lykke</a>
      </div>
      <div className="secondary-menu__separator" />
      <div className="secondary-menu__footer">
        <Social theme="small" />
      </div>
    </div>
  );
};

export default SecondaryMenu;
