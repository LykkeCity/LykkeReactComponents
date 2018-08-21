import {withInfo} from '@storybook/addon-info';
import {storiesOf} from '@storybook/react';
import React from 'react';
import {Badge} from '../dist/';

storiesOf('Badge', module).add(
  'overview',
  withInfo(`
    <h3>Props:</h3>

    ~~~javascript
    interface BadgeProps {
      color: string;
      children: string;
      tag?: string;
      className?: string;
    }
    ~~~
    `)(() => (
    <div className="container">
      <div className="row">
        <div className="col-sm-1">
          <Badge color="green">Green</Badge>
        </div>
        <div className="col-sm-1">
          <Badge color="blue">Blue</Badge>
        </div>
        <div className="col-sm-1">
          <Badge color="red">Red</Badge>
        </div>
        <div className="col-sm-1">
          <Badge color="orange">Orange</Badge>
        </div>
        <div className="col-sm-1">
          <Badge color="violet">Violet</Badge>
        </div>
        <div className="col-sm-1">
          <Badge color="gray">Gray</Badge>
        </div>
        <div className="col-sm-1">
          <Badge color="secondary">Secondary</Badge>
        </div>
      </div>
    </div>
  ))
);
