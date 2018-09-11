import {action} from '@storybook/addon-actions';
import {storiesOf} from '@storybook/react';
import React from 'react';
import {Header} from '../dist/';
import {MenuItem} from '../dist/Header/MainMenu';

const headerLinkOptions = [
  {
    isHidden: false,
    link: MenuItem.Trade
  },
  {
    isHidden: false,
    link: MenuItem.Funds
  },
  {
    isHidden: true,
    link: MenuItem.Profile
  }
];

const getLinkUrl = (menuItem: MenuItem) => {
  switch (menuItem) {
    case MenuItem.Trade: {
      return 'http://trade.lykke.com';
    }
    case MenuItem.Funds: {
      return 'http://wallet.lykke.com';
    }
    case MenuItem.Profile: {
      return '#';
    }
    default:
      return '#';
  }
};

// tslint:disable:jsx-no-lambda
storiesOf('Header', module).add('unauthorized', () => (
  <Header
    onLogout={action('logout')}
    activeMenuItem="trade"
    headerLinkOptions={headerLinkOptions}
    renderLink={(classes: string, title: JSX.Element, menuItem: MenuItem) => (
      <a href={getLinkUrl(menuItem)} className={classes}>
        {title}
      </a>
    )}
  />
));

storiesOf('Header', module).add('authorized', () => (
  <Header
    onLogout={action('logout')}
    activeMenuItem="funds"
    userName="Leroy"
    email="leroycox@gmail.com"
    headerLinkOptions={headerLinkOptions}
    renderLink={(classes: string, title: JSX.Element, menuItem: MenuItem) => (
      <a href={getLinkUrl(menuItem)} className={classes}>
        {title}
      </a>
    )}
  />
));
