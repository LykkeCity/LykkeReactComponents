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
      closeable?: boolean;
      hasScroll?: boolean;
      confirmButton?: {text: string};
      cancelButton?: {text: string};
      title?: string | JSX.Element;
      description?: string | JSX.Element;
      actions?: Array<{
        text: string;
        cssClass?: string;
        onClick: () => void;
      }>;
    }
    ~~~
    `)(() => (
    <div
      style={{
        backgroundColor: '#cfd2d7',
        height: '100%',
        position: 'fixed',
        width: '100%'
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

storiesOf('Dialog', module).add(
  'actions',
  withInfo('')(() => (
    <div
      style={{
        backgroundColor: '#cfd2d7',
        height: '100%',
        position: 'fixed',
        width: '100%'
      }}
    >
      <Dialog
        actions={[
          {
            onClick: action('action1'),
            text: 'Action 1'
          },
          {
            cssClass: 'btn-block',
            onClick: action('action2'),
            text: 'Action 2'
          }
        ]}
        visible
        title="Title"
        description="Description"
      />
    </div>
  ))
);

storiesOf('Dialog', module).add(
  'checkbox',
  withInfo('')(() => (
    <div
      style={{
        backgroundColor: '#cfd2d7',
        height: '100%',
        position: 'fixed',
        width: '100%'
      }}
    >
      <Dialog
        cancelButton={{text: 'Action 1'}}
        confirmButton={{text: 'Action 2'}}
        onCancel={action('action1')}
        onConfirm={action('action2')}
        visible
        shouldAccept
        title="Title"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      />
    </div>
  ))
);

storiesOf('Dialog', module).add(
  'dark theme',
  withInfo('')(() => (
    <div
      style={{
        backgroundColor: '#333',
        height: '100%',
        position: 'fixed',
        width: '100%'
      }}
    >
      <Dialog
        cancelButton={{text: 'Action 1'}}
        confirmButton={{text: 'Action 2'}}
        onCancel={action('action1')}
        onConfirm={action('action2')}
        visible
        theme="dark"
        shouldAccept
        title="Title"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      />
    </div>
  ))
);
