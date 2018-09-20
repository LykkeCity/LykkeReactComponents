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
    title: MenuItem.Settings,
    url: '#'
  }
];

const secondaryMenuItems = [
  {
    iconName: 'lykke-streams',
    title: MenuItem.LykkeStreams,
    url: '#'
  },
  {
    iconName: 'blockchain-explorer',
    title: MenuItem.BlockchainExplorer,
    url: '#'
  },
  {
    title: MenuItem.Assets,
    url: '#'
  },
  {
    title: MenuItem.ApiKeys,
    url: '#'
  },
  {
    title: MenuItem.AboutLykke,
    url: '#'
  }
];

const renderLink = (classes: string, title: JSX.Element, url: string) => (
  <a href={url} className={classes} key={`${url}_${title.props.children}`}>
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
    secondaryMenuLinkOptions={secondaryMenuItems}
    isAuth={false}
    isSecondaryMenuShown={false}
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
    secondaryMenuLinkOptions={secondaryMenuItems}
    isAuth={true}
    isSecondaryMenuShown={true}
  />
));
