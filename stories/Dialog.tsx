import {action} from '@storybook/addon-actions';
import {withInfo} from '@storybook/addon-info';
import {storiesOf} from '@storybook/react';
import React from 'react';
import {Dialog} from '../dist/';

storiesOf('Dialog', module).add(
  'overview',
  withInfo(`
    <h3>Props:</h3>

    ~~~javascript
    interface DialogProps {
      className?: string;
      tag?: string;
      onCancel?: () => void;
      onConfirm?: () => void;
      visible?: boolean;
      confirmButton?: {text: string};
      cancelButton?: {text: string};
      title?: string | JSX.Element;
      description?: string | JSX.Element;
    }
    ~~~
    `)(() => (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#cfd2d7',
        position: 'fixed'
      }}
    >
      <Dialog
        visible
        title="Title"
        description="Description"
        onCancel={action('cancel')}
        onConfirm={action('confirm')}
      />
    </div>
  ))
);
