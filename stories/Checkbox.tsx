import {action} from '@storybook/addon-actions';
import {withInfo} from '@storybook/addon-info';
import {storiesOf} from '@storybook/react';
import React from 'react';
import {Checkbox, CheckboxGroup} from '../dist/';

const checked = false;
storiesOf('Checkbox', module).add(
  'overview',
  withInfo(`
    <h3>Props:</h3>

    ~~~javascript
    interface CheckboxProps {
      checked: boolean;
      onToggle?: () => void;
      className?: string;
      label?: string | JSX.Element;
    }
    ~~~
    `)(() => (
    <div className="container">
      <div className="col-sm-2">
        <Checkbox
          label="Click me"
          checked={checked}
          onToggle={action('onToggle')}
        />
      </div>
    </div>
  ))
);

const firstChecked = true;
const secondChecked = false;
const thirdChecked = false;
storiesOf('Checkbox', module).add(
  'group',
  withInfo(`
    <h3>Props:</h3>

    ~~~javascript
    interface CheckboxProps {
      checked: boolean;
      onToggle?: () => void;
      className?: string;
      label?: string | JSX.Element;
    }
    ~~~
    `)(() => (
    <div className="container">
      <div className="col-sm-2">
        <CheckboxGroup>
          <Checkbox
            label="List item one"
            checked={firstChecked}
            onToggle={action('onToggle - first item')}
          />
          <Checkbox
            label="List item two"
            checked={secondChecked}
            onToggle={action('onToggle - second item')}
          />
          <Checkbox
            label="List item three"
            checked={thirdChecked}
            onToggle={action('onToggle - third item')}
          />
        </CheckboxGroup>
      </div>
    </div>
  ))
);
