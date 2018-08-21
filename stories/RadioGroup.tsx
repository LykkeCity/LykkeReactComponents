import {action} from '@storybook/addon-actions';
import {withInfo} from '@storybook/addon-info';
import {storiesOf} from '@storybook/react';
import React from 'react';
import {RadioGroup} from '../dist/';

storiesOf('RadioGroup', module).add(
  'overview',
  withInfo(`
    <h3>Props:</h3>

    ~~~javascript
    interface RadioGroupProps {
      options: RadioButtonOption[];
      name: string;
      handleChange: (value: string) => void;
      checkedValue?: string;
      tag?: string;
    }
    ~~~
    `)(() => (
    <div className="container">
      <div className="col-sm-1">
        <RadioGroup
          options={[
            {text: 'First', value: '1'},
            {text: 'Second', value: '2'},
            {text: 'Third', value: '3'}
          ]}
          name="group"
          handleChange={action('changed')}
        />
      </div>
    </div>
  ))
);
