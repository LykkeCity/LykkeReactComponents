import Enzyme, {mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import {DropdownList} from '../Dropdown';

Enzyme.configure({adapter: new Adapter()});

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
