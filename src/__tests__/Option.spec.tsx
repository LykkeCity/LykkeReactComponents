import {mount, shallow} from 'enzyme';
import React from 'react';
import {Option} from '../Select';

test('Option should render children', () => {
  const option = mount(<Option>Foo</Option>);
  expect(option.text()).toBe('Foo');
});

test('Option should set className', () => {
  const option = shallow(<Option className="foo" />);
  expect(option.find('.foo').hostNodes()).toHaveLength(1);
});

test('Option should handle isVisible property', () => {
  let option = mount(<Option />);
  expect(option.find('.hidden').hostNodes()).toHaveLength(0);
  option = mount(<Option isVisible={false} />);
  expect(option.find('.hidden').hostNodes()).toHaveLength(1);
});

test('Option should handle isSelected property', () => {
  let option = mount(<Option />);
  expect(
    option.find('.select-dropdown__option_selected').hostNodes()
  ).toHaveLength(0);
  option = mount(<Option isSelected={true} />);
  expect(
    option.find('.select-dropdown__option_selected').hostNodes()
  ).toHaveLength(1);
});

test('Option should handle isFocused property', () => {
  let option = mount(<Option />);
  expect(
    option.find('.select-dropdown__option_focused').hostNodes()
  ).toHaveLength(0);
  option = mount(<Option isFocused={true} />);
  expect(
    option.find('.select-dropdown__option_focused').hostNodes()
  ).toHaveLength(1);
});
