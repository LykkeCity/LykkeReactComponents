import {action} from '@storybook/addon-actions';
import {withInfo} from '@storybook/addon-info';
import {storiesOf} from '@storybook/react';
import React from 'react';
import {ClickOutside} from '../dist/';

storiesOf('ClickOutside', module).add(
  'overview',
  withInfo(`
    <h3>Props:</h3>

    ~~~javascript
    interface ClickOutsideProps {
      children?: React.ReactChild;
      onClickOutside?: () => void;
    }
    ~~~
    `)(() => (
    <ClickOutside onClickOutside={action('clicked outside')}>
      <div className="container">
        <div className="col-sm-2">
          <div onClick={action('clicked inside')} className="btn btn-primary">
            Click Outside
          </div>
        </div>
      </div>
    </ClickOutside>
  ))
);
