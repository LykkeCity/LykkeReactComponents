import {action} from '@storybook/addon-actions';
import {storiesOf} from '@storybook/react';
import React from 'react';
import {Input} from '../dist/';

storiesOf('Input', module).add('overview', () => (
  <div className="container">
    <div className="col-sm-6">
      <Input
        // tslint:disable-next-line:jsx-no-lambda
        onChange={(value: string) => action('changed')(value)}
      />
    </div>
  </div>
));

const numbersOnly = (value: string) => {
  if (isNaN(+value)) {
    return {
      errorMessage: 'Numbers available only',
      isValid: false
    };
  }

  return {
    isValid: true
  };
};
storiesOf('Input', module).add('numbers only', () => (
  <div className="container">
    <div className="col-sm-6">
      <Input
        // tslint:disable-next-line:jsx-no-lambda
        onChange={(value: string) => action('changed')(value)}
        validate={numbersOnly}
      />
    </div>
  </div>
));
