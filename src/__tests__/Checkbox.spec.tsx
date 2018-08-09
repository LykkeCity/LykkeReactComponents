import {mount} from 'enzyme';
import React from 'react';
import {Checkbox} from '../Checkbox';

const checked = false;

test('Checkbox should render input', () => {
  const wrapper = mount(<Checkbox checked={checked} />);
  expect(wrapper.find('input')).toHaveLength(1);
});

test('Checkbox should set className', () => {
  const wrapper = mount(<Checkbox checked={checked} className="foo" />);
  expect(wrapper.find('.foo').hostNodes()).toHaveLength(1);
});

test('Checkbox should call onChange callback on input change', () => {
  const onToggle = jest.fn();
  const wrapper = mount(<Checkbox checked={checked} onToggle={onToggle} />);
  (wrapper.find('input').props() as any).onChange();
  expect(onToggle).toBeCalled();
});
