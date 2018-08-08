import {withInfo} from '@storybook/addon-info';
import {storiesOf} from '@storybook/react';
import React from 'react';
import {AppError} from '../dist/';

storiesOf('AppError', module).add(
  'overview',
  withInfo(`
    <h3>Props:</h3>

    ~~~javascript
    interface Error404Props {
      buttonText?: string;
      buttonUrl?: string;
      className?: string;
      description?: string;
      email?: string;
      statusText?: string;
      tag?: string;
    }
    ~~~
    `)(() => (
    <div className="container">
      <div className="row">
        <div className="col-md-6 automargin">
          <AppError />
        </div>
      </div>
    </div>
  ))
);
