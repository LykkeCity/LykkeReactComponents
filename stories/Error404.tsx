import {withInfo} from '@storybook/addon-info';
import {storiesOf} from '@storybook/react';
import React from 'react';
import {Error404} from '../dist/';

storiesOf('Error404', module).add(
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
          <Error404 />
        </div>
      </div>
    </div>
  ))
);
