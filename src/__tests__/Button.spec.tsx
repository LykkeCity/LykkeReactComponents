import Enzyme, {mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import {Button} from '../Button';

Enzyme.configure({adapter: new Adapter()});

const onClick = jest.fn();
const getTestButton = (tag?: string) => (
  <Button onClick={onClick} tag={tag}>
    Foo
  </Button>
);

test('Button should render children', () => {
  const button = mount(getTestButton());
  expect(button.text()).toBe('Foo');
});

test('Button should call callback function on click', () => {
  const button = mount(getTestButton());
  button.simulate('click');
  expect(onClick).toBeCalled();
});

test('Button should render with tag from parameter', () => {
  const button = mount(getTestButton('button'));
  expect(button.find('button')).toHaveLength(1);
  expect(button.find('div')).toHaveLength(0);
});
