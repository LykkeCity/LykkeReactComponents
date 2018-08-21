import {action} from '@storybook/addon-actions';
import {storiesOf} from '@storybook/react';
import React from 'react';
import {Header} from '../dist/';

storiesOf('Header', module).add('unauthorized', () => (
  <Header onLogout={action('logout')} activeMenuItem="trade" />
));

storiesOf('Header', module).add('authorized', () => (
  <Header
    onLogout={action('logout')}
    activeMenuItem="funds"
    userName="Leroy"
    email="leroycox@gmail.com"
  />
));
