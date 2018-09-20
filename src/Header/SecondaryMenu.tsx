import classnames from 'classnames';
import React from 'react';
import {Social} from '../Social';
import {AppLinks} from './AppLinks';
import {HeaderLinkOptions} from './Header';

const DEFAULT_URL = '#';

export interface SecondaryMenuProps {
  className?: string;
  renderLink: any;
  secondaryMenuItems: HeaderLinkOptions[];
}

export const SecondaryMenu: React.SFC<SecondaryMenuProps> = ({
  className,
  renderLink,
  secondaryMenuItems,
  ...attributes
}) => {
  return (
    <div {...attributes} className={classnames('secondary-menu', className)}>
      {secondaryMenuItems.map((item: HeaderLinkOptions) =>
        renderLink(
          `secondary-menu__item secondary-menu__item_${item.iconName ||
            'no-image'}`,
          <span className="main-menu__item-text">{item.title}</span>,
          item.url || DEFAULT_URL
        )
      )}
      <AppLinks className="lykke-header__app-links" />
      <div className="secondary-menu__separator" />
      <div className="secondary-menu__footer">
        <Social theme="small" />
      </div>
    </div>
  );
};

SecondaryMenu.displayName = 'SecondaryMenu';
export default SecondaryMenu;
