import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import {Checkbox} from '../Checkbox';

Enzyme.configure({adapter: new Adapter()});

let checked = false;

test('Checkbox should be rendered inside label', () => {
  const checkbox = mount(<Checkbox checked />);
  expect(checkbox.find('label').hostNodes()).toHaveLength(1);
});

test('Checkbox should set className', () => {
  const checkbox = mount(<Checkbox checked={checked} className="foo" />);
  expect(checkbox.find('.foo').hostNodes()).toHaveLength(1);
});

test('Checkbox should render text from props', () => {
  const checkbox = mount(<Checkbox checked={checked} label="foo" />);
  expect(checkbox.find('span').text()).toBe('foo');
});

test('Checkbox should change state of external property', () => {
  const checkbox = mount(<Checkbox checked={checked} />);
  checked = false;
  checkbox.find('label').simulate('click');
  checked = true;
});

test('Checkbox should call onToggle on click', () => {
  const onToggle = jest.fn();
  const checkbox = mount(<Checkbox checked={checked} onToggle={onToggle} />);
  expect(onToggle).not.toBeCalled();
  checkbox.find('input').simulate('change');
  expect(onToggle).toBeCalled();
});
