import {action} from '@storybook/addon-actions';
import {storiesOf} from '@storybook/react';
import React from 'react';
import {Header} from '../dist/';
import {MenuItem} from '../dist/Header/MainMenu';

const headerLinkOptions = [
  {
    title: MenuItem.Trade,
    url: 'http://trade.lykke.com'
  },
  {
    title: MenuItem.Funds,
    url: 'http://wallet.lykke.com'
  },
  {
    title: MenuItem.Profile,
    url: '#'
  }
];

const renderLink = (classes: string, title: JSX.Element, url: string) => (
  <a href={url} className={classes}>
    {title}
  </a>
);

// tslint:disable:jsx-no-lambda
storiesOf('Header', module).add('unauthorized', () => (
  <Header
    onLogout={action('logout')}
    activeMenuItem="trade"
    headerLinkOptions={headerLinkOptions}
    renderLink={renderLink}
  />
));

storiesOf('Header', module).add('authorized', () => (
  <Header
    onLogout={action('logout')}
    activeMenuItem="funds"
    userName="Leroy"
    email="leroycox@gmail.com"
    headerLinkOptions={headerLinkOptions}
    renderLink={renderLink}
  />
));
