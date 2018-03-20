import {action} from '@storybook/addon-actions';
import {withInfo} from '@storybook/addon-info';
import {storiesOf} from '@storybook/react';
import React from 'react';
import {Dropdown, DropdownContainer, DropdownControl, DropdownList, DropdownListItem} from '../dist/';

storiesOf('Dropdown', module)
  .add('overview',
    withInfo(`
    <h3>Props:</h3>

    ~~~javascript
    interface DropdownProps {
      children?: React.ReactChild | React.ReactChild[];
      className?: string;
      isOpen?: boolean;
      onOpen?: () => void;
      tag?: string;
      trigger?: string;
    }

    interface DropdownContainerProps {
      className?: string;
      tag?: string;
      children?: React.ReactChild | React.ReactChild[];
    }

    interface DropdownControlProps {
      className?: string;
      tag?: string;
      children?: React.ReactChild | React.ReactChild[];
    }

    interface DropdownListProps {
      className?: string;
      tag?: string;
      children?: any;
    }

    interface DropdownListItemProps {
      className?: string;
      isCategory?: boolean;
      tag?: string;
      children?: React.ReactChild | React.ReactChild[];
      onClick?: () => void;
    }
    ~~~
    `)(() =>
      <div className="container">
        <div className="col-sm-2">
          <Dropdown>
            <DropdownControl>
              <a className="btn btn-primary">Hover me</a>
            </DropdownControl>
            <DropdownContainer>
              <DropdownList>
                <DropdownListItem isCategory>
                  Category 1
                </DropdownListItem>
                <DropdownListItem>
                  <a>Item 1</a>
                </DropdownListItem>
                <DropdownListItem>
                  <a>Item 2</a>
                </DropdownListItem>
                <DropdownListItem isCategory>
                  Category 2
                </DropdownListItem>
                <DropdownListItem>
                  <a>Item 3</a>
                </DropdownListItem>
              </DropdownList>
            </DropdownContainer>
          </Dropdown>
        </div>
      </div>
    )
  )

storiesOf('Dropdown', module)
  .add('trigger click', withInfo('')(() =>
    <div className="container">
      <div className="col-sm-2">
        <Dropdown trigger="click" onOpen={action('opened')}>
          <DropdownControl>
            <a className="btn btn-primary">Click me</a>
          </DropdownControl>
          <DropdownContainer>
            Opened
          </DropdownContainer>
        </Dropdown>
      </div>
    </div>
  )
)

storiesOf('Dropdown', module)
  .add('open by default', withInfo('')(() =>
    <div className="container">
      <div className="col-sm-2">
        <Dropdown trigger="click" isOpen>
          <DropdownControl>
            <a className="btn btn-primary">Click me</a>
          </DropdownControl>
          <DropdownContainer>
            Opened
          </DropdownContainer>
        </Dropdown>
      </div>
    </div>
  )
)
