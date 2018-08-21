import {storiesOf} from '@storybook/react';
import React from 'react';
import {HBar, VBar} from '../dist/';

storiesOf('Bar', module).add('horizontal', () => (
  <div className="container">
    <div className="col-sm-6">
      Text<HBar />Text
    </div>
  </div>
));
storiesOf('Bar', module).add('vertical', () => (
  <div className="container">
    <div className="col-sm-6">
      Text<VBar />Text
    </div>
  </div>
));
