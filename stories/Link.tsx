import {storiesOf} from '@storybook/react';
import React from 'react';
import {Link, LinkColor} from '../dist/';

storiesOf('Link', module).add('overview', () => (
  <div className="container">
    <div className="col-sm-4">
      <Link href="#" color={LinkColor.Blue}>
        Blue link
      </Link>
    </div>
    <div className="col-sm-4">
      <Link href="#" color={LinkColor.Gray}>
        Gray link
      </Link>
    </div>
    <div className="col-sm-4">
      <Link href="#" color={LinkColor.Black}>
        Black link
      </Link>
    </div>
  </div>
));
