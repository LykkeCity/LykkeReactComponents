import {mount} from 'enzyme';
import React from 'react';
import PasswordInput from '../PasswordInput';

const onChange = jest.fn();
const getTestPasswordInput = (className?: string) => (
  <PasswordInput onChange={onChange} className={className} />
);

test('PasswordInput should render input', () => {
  const wrapper = mount(getTestPasswordInput());
  expect(wrapper.find('input')).toHaveLength(1);
});

test('PasswordInput should have password type by default', () => {
  const wrapper = mount(getTestPasswordInput());
  expect(wrapper.find('input[type="password"]')).toHaveLength(1);
});

test('PasswordInput should set className from parameters', () => {
  const className = 'foo';
  const wrapper = mount(getTestPasswordInput(className));
  expect(wrapper.find(`.${className}`).hostNodes()).toHaveLength(1);
});

test('PasswordInput should change type on icon click', () => {
  const wrapper = mount(getTestPasswordInput());
  const toggleIcon = wrapper.find('.password-toggle');

  toggleIcon.simulate('click');
  expect(wrapper.find('input[type="password"]')).toHaveLength(0);
  expect(wrapper.find('input[type="text"]')).toHaveLength(1);

  toggleIcon.simulate('click');
  expect(wrapper.find('input[type="password"]')).toHaveLength(1);
  expect(wrapper.find('input[type="text"]')).toHaveLength(0);
});
