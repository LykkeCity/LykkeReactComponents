import {mount} from 'enzyme';
import React from 'react';
import {RadioGroup} from '../Radio';

const radioButtonOptions = [
  {text: 'First', value: '1'},
  {text: 'Second', value: '2'},
  {text: 'Third', value: '3'}
];
let handleChange;

const getTestRadioGroup = (options: any = {}) => {
  handleChange = jest.fn();
  return (
    <RadioGroup
      options={radioButtonOptions}
      name="group"
      handleChange={handleChange}
      className={options.className}
      checkedValue={options.checkedValue}
    />
  );
};

test('RadioGroup should have empty state by default', () => {
  const wrapper = mount(getTestRadioGroup());
  expect((wrapper.instance() as any).state).toEqual({});
});

test('RadioGroup should set checked value in state by default', () => {
  const wrapper = mount(
    getTestRadioGroup({checkedValue: radioButtonOptions[0].value})
  );
  expect((wrapper.instance() as any).state).toEqual({
    currentValue: radioButtonOptions[0].value
  });
});

test('RadioGroup should render RadioButtons', () => {
  const wrapper = mount(getTestRadioGroup());
  expect(wrapper.find('RadioButton')).toHaveLength(3);
});

test('RadioButton should set className', () => {
  const className = 'foo';
  const wrapper = mount(getTestRadioGroup({className}));
  expect(wrapper.find(`.${className}`).hostNodes()).toHaveLength(1);
});

test('RadioButton should call onChange callback on input change', () => {
  const wrapper = mount(getTestRadioGroup());
  (wrapper
    .find('RadioButton')
    .first()
    .find('input')
    .props() as any).onChange();
  expect(handleChange).toBeCalledWith(radioButtonOptions[0].value);
});
