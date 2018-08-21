import {mount} from 'enzyme';
import React from 'react';
import List, {ListType} from '../List';

const listOptions = ['List item one', 'List item two', 'List item three'];
const getTestList = (options: any = {}) => (
  <List
    options={listOptions}
    listType={options.listType || ListType.Ordered}
    className={options.className}
  />
);

test('List should render children items', () => {
  const wrapper = mount(getTestList());
  expect(wrapper.find('ol')).toHaveLength(1);
  expect(wrapper.find('.list__item')).toHaveLength(3);
});

test('List should render default classes', () => {
  const wrapper = mount(getTestList());
  expect(wrapper.find('.list')).toHaveLength(1);
});

test('List should render class from parameter', () => {
  const className = 'foo';
  const wrapper = mount(getTestList({className}));
  expect(wrapper.find('.list').hasClass(className)).toBe(true);
});

test('List should render selected type of list', () => {
  const wrapper = mount(getTestList({listType: ListType.Unordered}));
  expect(wrapper.find('ul')).toHaveLength(1);
  expect(wrapper.find('ol')).toHaveLength(0);
});
