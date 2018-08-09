import {withInfo} from '@storybook/addon-info';
import {storiesOf} from '@storybook/react';
import React from 'react';
import {List, ListType} from '../dist';

const options = ['List item one', 'List item two', 'List item three'];

storiesOf('List', module).add(
  'ordered',
  withInfo(`
    <h3>Props:</h3>

    ~~~javascript
    interface BadgeProps {
      options: any[];
      listType: ListType;
      className?: string;
    }
    ~~~
    `)(() => (
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <List listType={ListType.Ordered} options={options} />
        </div>
      </div>
    </div>
  ))
);

storiesOf('List', module).add(
  'unordered',
  withInfo(`
    <h3>Props:</h3>

    ~~~javascript
    interface BadgeProps {
      options: any[];
      listType: ListType;
      className?: string;
    }
    ~~~
    `)(() => (
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <List listType={ListType.Unordered} options={options} />
        </div>
      </div>
    </div>
  ))
);
