import {mount, shallow} from 'enzyme';
import React from 'react';
import {DropdownList} from '../Dropdown';

test('Dropdown List should render children', () => {
  const dropdownList = mount(<DropdownList>Foo</DropdownList>);
  expect(dropdownList.text()).toBe('Foo');
});

test('Dropdown List should be ul by default', () => {
  const dropdownList = shallow(<DropdownList />);
  expect(dropdownList.closest('ul')).toHaveLength(1);
});

test('Dropdown List should support custom tag', () => {
  const dropdownList = shallow(<DropdownList tag="span" />);
  expect(dropdownList.find('span').hostNodes()).toHaveLength(1);
});

test('Dropdown List should set className', () => {
  const dropdownList = shallow(<DropdownList className="foo" />);
  expect(dropdownList.find('.foo').hostNodes()).toHaveLength(1);
});
