import {withInfo} from '@storybook/addon-info';
import {storiesOf} from '@storybook/react';
import React from 'react';
import {Tab, Tabs} from '../dist/';

storiesOf('Tabs', module).add(
  'overview',
  withInfo(`
    <h3>Props:</h3>

    ~~~javascript
    interface TabsProps {
      children: any;
      className?: string;
      tag?: string;
    }
    ~~~
    `)(() => (
    <div className="container">
      <div className="col-sm-12">
        <Tabs>
          <Tab title="First">First tab</Tab>
          <Tab title="Second">Second tab</Tab>
        </Tabs>
      </div>
    </div>
  ))
);
