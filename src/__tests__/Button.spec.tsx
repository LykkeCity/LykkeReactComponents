import Enzyme, {mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import {Button} from '../Button';

Enzyme.configure({adapter: new Adapter()});

const onClick = jest.fn();
const getTestButton = () => <Button onClick={onClick}>Foo</Button>;

test('Button should render children', () => {
  const button = mount(getTestButton());
  expect(button.text()).toBe('Foo');
});

test('Button should call callback function on click', () => {
  const button = mount(getTestButton());
  button.simulate('click');
  expect(onClick).toBeCalled();
});
