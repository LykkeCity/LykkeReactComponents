import {mount} from 'enzyme';
import React from 'react';
import {Button} from '../Button';

const onClick = jest.fn();
const getTestButton = (tag?: string) => (
  <Button onClick={onClick} tag={tag}>
    Foo
  </Button>
);

test('Button should render children', () => {
  const wrapper = mount(getTestButton());
  expect(wrapper.text()).toBe('Foo');
});

test('Button should render default classes', () => {
  const wrapper = mount(getTestButton());
  expect(wrapper.find('.btn--primary')).toHaveLength(1);
  expect(wrapper.find('.btn-md')).toHaveLength(1);
});

test('Button should call callback function on click', () => {
  const wrapper = mount(getTestButton());
  wrapper.simulate('click');
  expect(onClick).toBeCalled();
});

test('Button should render with tag from parameter', () => {
  const wrapper = mount(getTestButton('button'));
  expect(wrapper.find('button')).toHaveLength(1);
  expect(wrapper.find('div')).toHaveLength(0);
});
