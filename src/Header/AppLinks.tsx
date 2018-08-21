import classnames from 'classnames';
import React from 'react';

export const APPSTORE_LINK = 'https://appsto.re/ru/Dwjvcb.i';
export const GOOGLEPLAY_LINK =
  'https://play.google.com/store/apps/details?id=com.lykkex.LykkeWallet';

export interface AppLinksProps {
  className?: string;
}

export const AppLinks: React.SFC<AppLinksProps> = ({
  className,
  ...attributes
}) => {
  return (
    <div {...attributes} className={classnames('app-links', className)}>
      <div className="app-links__item app-links__item_appstore">
        <a href={APPSTORE_LINK} target="_blank" />
      </div>
      <div className="app-links__item app-links__item_googleplay">
        <a href={GOOGLEPLAY_LINK} target="_blank" />
      </div>
    </div>
  );
};

export default AppLinks;
