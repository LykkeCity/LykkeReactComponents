import {action} from '@storybook/addon-actions';
import {withInfo} from '@storybook/addon-info';
import {storiesOf} from '@storybook/react';
import React from 'react';
import {Switcher} from '../dist/';

const checked = false;
storiesOf('Switcher', module).add(
  'overview',
  withInfo(`
    <h3>Props:</h3>

    ~~~javascript
    interface SwitcherProps {
      checked: boolean;
      onToggle?: () => void;
      className?: string;
      label?: string | JSX.Element;
    }
    ~~~
    `)(() => (
    <div className="container">
      <div className="col-sm-2">
        <Switcher
          label="Click me"
          checked={checked}
          onToggle={action('onToggle')}
        />
      </div>
    </div>
  ))
);
