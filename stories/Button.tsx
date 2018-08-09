import {action} from '@storybook/addon-actions';
import {withInfo} from '@storybook/addon-info';
import {storiesOf} from '@storybook/react';
import React from 'react';
import {Button, ButtonSize, ButtonType} from '../dist/';

storiesOf('Button', module).add(
  'Blue',
  withInfo(`
    <h3>Props:</h3>

    ~~~javascript
    interface ButtonProps {
      onClick: () => void;
      className?: string;
      tag?: string;
      type?: ButtonType;
      size?: ButtonSize;
      children: string;
    }
    ~~~
    `)(() => (
    <div className="container">
      <div className="col-sm-3">
        <Button onClick={action('clicked')} size={ButtonSize.Large}>
          Click me
        </Button>
      </div>
      <div className="col-sm-3">
        <Button onClick={action('clicked')} size={ButtonSize.Medium}>
          Click me
        </Button>
      </div>
      <div className="col-sm-3">
        <Button onClick={action('clicked')} size={ButtonSize.Small}>
          Click me
        </Button>
      </div>
      <div className="col-sm-3">
        <Button onClick={action('clicked')} size={ButtonSize.XSmall}>
          Click me
        </Button>
      </div>
    </div>
  ))
);

storiesOf('Button', module).add(
  'Transparent',
  withInfo(`
    <h3>Props:</h3>

    ~~~javascript
    interface ButtonProps {
      onClick: () => void;
      className?: string;
      tag?: string;
      type?: ButtonType;
      size?: ButtonSize;
      children: string;
    }
    ~~~
    `)(() => (
    <div className="container">
      <div className="col-sm-3">
        <Button
          onClick={action('clicked')}
          type={ButtonType.Link}
          size={ButtonSize.Large}
        >
          Click me
        </Button>
      </div>
      <div className="col-sm-3">
        <Button
          onClick={action('clicked')}
          type={ButtonType.Link}
          size={ButtonSize.Medium}
        >
          Click me
        </Button>
      </div>
      <div className="col-sm-3">
        <Button
          onClick={action('clicked')}
          type={ButtonType.Link}
          size={ButtonSize.Small}
        >
          Click me
        </Button>
      </div>
      <div className="col-sm-3">
        <Button
          onClick={action('clicked')}
          type={ButtonType.Link}
          size={ButtonSize.XSmall}
        >
          Click me
        </Button>
      </div>
    </div>
  ))
);

storiesOf('Button', module).add(
  'White',
  withInfo(`
    <h3>Props:</h3>

    ~~~javascript
    interface ButtonProps {
      onClick: () => void;
      className?: string;
      tag?: string;
      type?: ButtonType;
      size?: ButtonSize;
      children: string;
    }
    ~~~
    `)(() => (
    <div className="container">
      <div className="col-sm-3">
        <Button
          onClick={action('clicked')}
          type={ButtonType.White}
          size={ButtonSize.Large}
        >
          Click me
        </Button>
      </div>
      <div className="col-sm-3">
        <Button
          onClick={action('clicked')}
          type={ButtonType.White}
          size={ButtonSize.Medium}
        >
          Click me
        </Button>
      </div>
      <div className="col-sm-3">
        <Button
          onClick={action('clicked')}
          type={ButtonType.White}
          size={ButtonSize.Small}
        >
          Click me
        </Button>
      </div>
      <div className="col-sm-3">
        <Button
          onClick={action('clicked')}
          type={ButtonType.White}
          size={ButtonSize.XSmall}
        >
          Click me
        </Button>
      </div>
    </div>
  ))
);

storiesOf('Button', module).add(
  'Disabled',
  withInfo(`
    <h3>Props:</h3>

    ~~~javascript
    interface ButtonProps {
      onClick: () => void;
      className?: string;
      tag?: string;
      type?: ButtonType;
      size?: ButtonSize;
      children: string;
    }
    ~~~
    `)(() => (
    <div className="container">
      <div className="col-sm-3">
        <Button onClick={action('clicked')} size={ButtonSize.Large} isDisabled>
          Disabled
        </Button>
      </div>
      <div className="col-sm-3">
        <Button onClick={action('clicked')} size={ButtonSize.Medium} isDisabled>
          Disabled
        </Button>
      </div>
      <div className="col-sm-3">
        <Button onClick={action('clicked')} size={ButtonSize.Small} isDisabled>
          Disabled
        </Button>
      </div>
      <div className="col-sm-3">
        <Button onClick={action('clicked')} size={ButtonSize.XSmall} isDisabled>
          Disabled
        </Button>
      </div>
    </div>
  ))
);
