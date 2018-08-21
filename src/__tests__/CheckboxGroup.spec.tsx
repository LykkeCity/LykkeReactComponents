import {mount} from 'enzyme';
import React from 'react';
import {Checkbox, CheckboxGroup} from '../Checkbox';

const getTestCheckboxGroup = (className?: string) => (
  <CheckboxGroup className={className}>
    <Checkbox checked={false} />
    <Checkbox checked={false} />
    <Checkbox checked={false} />
  </CheckboxGroup>
);

test('CheckboxGroup should render checkboxes', () => {
  const wrapper = mount(getTestCheckboxGroup());
  expect(wrapper.find('Checkbox')).toHaveLength(3);
});

test('Checkbox should render default className', () => {
  const wrapper = mount(getTestCheckboxGroup());
  expect(wrapper.find('.checkbox-group').hostNodes()).toHaveLength(1);
});

test('Checkbox should set className', () => {
  const className = 'foo';
  const wrapper = mount(getTestCheckboxGroup(className));
  expect(wrapper.find(`.${className}`).hostNodes()).toHaveLength(1);
});
