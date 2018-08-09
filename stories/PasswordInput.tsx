import {action} from '@storybook/addon-actions';
import {storiesOf} from '@storybook/react';
import React from 'react';
import {PasswordInput} from '../dist/';

storiesOf('PasswordInput', module).add('overview', () => (
  <div className="container">
    <div className="col-sm-6">
      <PasswordInput
        // tslint:disable-next-line:jsx-no-lambda
        onChange={(value: string) => action('changed')(value)}
      />
    </div>
  </div>
));
