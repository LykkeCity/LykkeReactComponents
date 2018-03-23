import {action} from '@storybook/addon-actions';
import {withInfo} from '@storybook/addon-info';
import {storiesOf} from '@storybook/react';
import React from 'react';
import {
  Dropdown,
  DropdownContainer,
  DropdownControl,
  DropdownList,
  DropdownListItem,
  DropdownPosition
} from '../dist/';

storiesOf('Dropdown', module).add(
  'overview',
  withInfo(`
    <h3>Props:</h3>

    ~~~javascript
    interface DropdownProps {
      children?: React.ReactChild | React.ReactChild[];
      className?: string;
      fullHeight?: boolean;
      isOpen?: boolean;
      onOpen?: () => void;
      onClose?: () => void;
      position?: string;
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
    `)(() => (
    <div className="container">
      <div className="col-sm-2">
        <Dropdown>
          <DropdownControl>
            <a className="btn btn-primary">Hover me</a>
          </DropdownControl>
          <DropdownContainer>
            <DropdownList>
              <DropdownListItem isCategory>Category 1</DropdownListItem>
              <DropdownListItem>
                <a>Item 1</a>
              </DropdownListItem>
              <DropdownListItem>
                <a>Item 2</a>
              </DropdownListItem>
              <DropdownListItem isCategory>Category 2</DropdownListItem>
              <DropdownListItem>
                <a>Item 3</a>
              </DropdownListItem>
              <DropdownListItem>
                <a>Item 4</a>
              </DropdownListItem>
              <DropdownListItem>
                <a>Item 5</a>
              </DropdownListItem>
              <DropdownListItem>
                <a>Item 6</a>
              </DropdownListItem>
              <DropdownListItem>
                <a>Item 7</a>
              </DropdownListItem>
              <DropdownListItem>
                <a>Item 8</a>
              </DropdownListItem>
              <DropdownListItem>
                <a>Item 9</a>
              </DropdownListItem>
              <DropdownListItem>
                <a>Item 10</a>
              </DropdownListItem>
              <DropdownListItem>
                <a>Item 11</a>
              </DropdownListItem>
              <DropdownListItem>
                <a>Item 12</a>
              </DropdownListItem>
              <DropdownListItem>
                <a>Item 13</a>
              </DropdownListItem>
              <DropdownListItem>
                <a>Item 14</a>
              </DropdownListItem>
              <DropdownListItem>
                <a>Item 15</a>
              </DropdownListItem>
              <DropdownListItem>
                <a>Item 16</a>
              </DropdownListItem>
            </DropdownList>
          </DropdownContainer>
        </Dropdown>
      </div>
    </div>
  ))
);

storiesOf('Dropdown', module).add(
  'trigger click',
  withInfo('')(() => (
    <div className="container">
      <div className="col-sm-2">
        <Dropdown
          trigger="click"
          onOpen={action('opened')}
          onClose={action('closed')}
        >
          <DropdownControl>
            <a className="btn btn-primary">Click me</a>
          </DropdownControl>
          <DropdownContainer>Opened</DropdownContainer>
        </Dropdown>
      </div>
    </div>
  ))
);

storiesOf('Dropdown', module).add(
  'open by default',
  withInfo('')(() => (
    <div className="container">
      <div className="col-sm-2">
        <Dropdown trigger="click" isOpen>
          <DropdownControl>
            <a className="btn btn-primary">Click me</a>
          </DropdownControl>
          <DropdownContainer>Opened</DropdownContainer>
        </Dropdown>
      </div>
    </div>
  ))
);

storiesOf('Dropdown', module).add(
  'position right',
  withInfo('')(() => (
    <div className="container">
      <div style={{position: 'absolute'}}>
        <Dropdown position={DropdownPosition.RIGHT}>
          <DropdownControl>
            <a className="btn btn-primary">Hover me</a>
          </DropdownControl>
          <DropdownContainer>Opened</DropdownContainer>
        </Dropdown>
      </div>
    </div>
  ))
);

storiesOf('Dropdown', module).add(
  'nested',
  withInfo('')(() => (
    <div className="container">
      <div className="col-sm-2">
        <Dropdown fullHeight>
          <DropdownControl>
            <a className="btn btn-primary">Menu</a>
          </DropdownControl>
          <DropdownContainer>
            <DropdownList>
              <DropdownListItem>
                <Dropdown position={DropdownPosition.RIGHT}>
                  <DropdownControl>
                    <a>Submenu</a>
                  </DropdownControl>
                  <DropdownContainer>
                    <DropdownList>
                      <DropdownListItem>
                        <a>Item 1</a>
                      </DropdownListItem>
                      <DropdownListItem>
                        <a>Item 2</a>
                      </DropdownListItem>
                      <DropdownListItem>
                        <a>Item 4</a>
                      </DropdownListItem>
                      <DropdownListItem>
                        <a>Item 5</a>
                      </DropdownListItem>
                      <DropdownListItem>
                        <a>Item 6</a>
                      </DropdownListItem>
                      <DropdownListItem>
                        <a>Item 7</a>
                      </DropdownListItem>
                      <DropdownListItem>
                        <a>Item 8</a>
                      </DropdownListItem>
                      <DropdownListItem>
                        <a>Item 9</a>
                      </DropdownListItem>
                      <DropdownListItem>
                        <a>Item 10</a>
                      </DropdownListItem>
                      <DropdownListItem>
                        <a>Item 11</a>
                      </DropdownListItem>
                      <DropdownListItem>
                        <a>Item 12</a>
                      </DropdownListItem>
                      <DropdownListItem>
                        <a>Item 13</a>
                      </DropdownListItem>
                      <DropdownListItem>
                        <a>Item 14</a>
                      </DropdownListItem>
                      <DropdownListItem>
                        <a>Item 15</a>
                      </DropdownListItem>
                      <DropdownListItem>
                        <a>Item 16</a>
                      </DropdownListItem>
                    </DropdownList>
                  </DropdownContainer>
                </Dropdown>
              </DropdownListItem>
            </DropdownList>
          </DropdownContainer>
        </Dropdown>
      </div>
    </div>
  ))
);
