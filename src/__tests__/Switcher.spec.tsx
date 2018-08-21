import {mount} from 'enzyme';
import React from 'react';
import {Switcher} from '../Switcher';

let checked = false;

test('Switcher should be rendered inside label', () => {
  const wrapper = mount(<Switcher checked />);
  expect(wrapper.find('label').hostNodes()).toHaveLength(1);
});

test('Switcher should set className', () => {
  const wrapper = mount(<Switcher checked={checked} className="foo" />);
  expect(wrapper.find('.foo').hostNodes()).toHaveLength(1);
});

test('Switcher should render text from props', () => {
  const wrapper = mount(<Switcher checked={checked} label="foo" />);
  expect(wrapper.find('span').text()).toBe('foo');
});

test('Switcher should change state of external property', () => {
  const wrapper = mount(<Switcher checked={checked} />);
  checked = false;
  wrapper.find('label').simulate('click');
  checked = true;
});

test('Switcher should call onToggle on click', () => {
  const onToggle = jest.fn();
  const wrapper = mount(<Switcher checked={checked} onToggle={onToggle} />);
  expect(onToggle).not.toBeCalled();
  wrapper.find('input').simulate('change');
  expect(onToggle).toBeCalled();
});
