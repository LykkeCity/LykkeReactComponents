import {mount} from 'enzyme';
import React from 'react';
import Badge from '../Badge';

const color = 'green';
const getTestBadge = (options: any = {}) => (
  <Badge color={color} tag={options.tag || 'div'} className={options.className}>
    {color}
  </Badge>
);

test('Badge should render children', () => {
  const wrapper = mount(getTestBadge());
  expect(wrapper.find('.lykke-badge')).toHaveLength(1);
});

test('Badge should render default classes', () => {
  const wrapper = mount(getTestBadge());
  expect(wrapper.find('.lykke-badge')).toHaveLength(1);
});

test('Badge should render class from parameter', () => {
  const wrapper = mount(getTestBadge({className: 'foo'}));
  expect(wrapper.find('.lykke-badge').hasClass('foo')).toBe(true);
});

test('Badge should render with tag from parameter', () => {
  const wrapper = mount(getTestBadge({tag: 'label'}));
  expect(wrapper.find('label')).toHaveLength(1);
  expect(wrapper.find('div')).toHaveLength(0);
});
