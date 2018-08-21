import {mount} from 'enzyme';
import React from 'react';
import {RadioButton} from '../Radio';

test('RadioButton should render input', () => {
  const wrapper = mount(<RadioButton value="1" groupName="group" />);
  expect(wrapper.find('input')).toHaveLength(1);
});

test('RadioButton should set className', () => {
  const wrapper = mount(
    <RadioButton value="1" groupName="group" className="foo" />
  );
  expect(wrapper.find('.foo').hostNodes()).toHaveLength(1);
});

test('RadioButton should call onChange callback on input change', () => {
  const onChange = jest.fn();
  const value = '1';
  const wrapper = mount(
    <RadioButton value={value} groupName="group" onChange={onChange} />
  );
  (wrapper.find('input').props() as any).onChange();
  expect(onChange).toBeCalledWith(value);
});
