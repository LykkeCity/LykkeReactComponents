import {action} from '@storybook/addon-actions';
import {withInfo} from '@storybook/addon-info';
import {storiesOf} from '@storybook/react';
import React from 'react';
import {Button} from '../dist/';

storiesOf('Button', module).add(
  'overview',
  withInfo(`
    <h3>Props:</h3>

    ~~~javascript
    interface ButtonProps {
      onClick: () => void;
      className?: string;
      tag?: string;
      children: string;
    }
    ~~~
    `)(() => (
    <div className="container">
      <div className="col-sm-2">
        <Button onClick={action('clicked')}>Click me</Button>
      </div>
    </div>
  ))
);
