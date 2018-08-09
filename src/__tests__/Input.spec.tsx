import {mount} from 'enzyme';
import React from 'react';
import Input from '../Input';

const onChange = jest.fn();
const getTestInput = (options: any = {}) => (
  <Input
    onChange={onChange}
    validate={options.validate}
    className={options.className}
  />
);

test('Input should render input', () => {
  const wrapper = mount(getTestInput());
  expect(wrapper.find('input')).toHaveLength(1);
});

test('Input should set className from parameters', () => {
  const className = 'foo';
  const wrapper = mount(getTestInput({className}));
  expect(wrapper.find(`.${className}`).hostNodes()).toHaveLength(1);
});

test('Input should call onChange callback', () => {
  const wrapper = mount(getTestInput());
  wrapper.find('input').simulate('change');
  expect(onChange).toBeCalled();
});

test('Input should not update state if validation function not passed', () => {
  const wrapper = mount(getTestInput());
  (wrapper.instance() as any).setState = jest.fn();
  wrapper.find('input').simulate('change');
  expect((wrapper.instance() as any).setState).not.toBeCalled();
});

test('Input should update state with the result of validation function', () => {
  const validate = jest.fn();
  const wrapper = mount(getTestInput({validate}));
  (wrapper.instance() as any).setState = jest.fn();
  wrapper.find('input').simulate('change');
  expect(validate).toBeCalled();
  expect((wrapper.instance() as any).setState).toBeCalled();
});

test('Input should render validation error if input has invalid state', () => {
  const wrapper = mount(getTestInput());
  expect(wrapper.find('.input-container__validation-error')).toHaveLength(0);

  const errorMessage = 'Error message';
  wrapper.setState({isValid: false, errorMessage});
  expect(wrapper.find('.input-container__validation-error')).toHaveLength(1);
  expect(wrapper.find('.input-container__validation-error').text()).toBe(
    errorMessage
  );
});
