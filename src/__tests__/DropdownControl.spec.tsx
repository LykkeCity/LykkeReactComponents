import Enzyme, {mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import {Dropdown, DropdownControl} from '../Dropdown';

Enzyme.configure({adapter: new Adapter()});

test('Dropdown Control should render children', () => {
  const dropdownControl = mount(<DropdownControl>Foo</DropdownControl>);
  expect(dropdownControl.text()).toBe('Foo');
});

test('Dropdown Control should be div by default', () => {
  const dropdownControl = shallow(<DropdownControl />);
  expect(dropdownControl.closest('div')).toHaveLength(1);
});

test('Dropdown Control should support custom tag', () => {
  const dropdownControl = shallow(<DropdownControl tag="span" />);
  expect(dropdownControl.find('span').hostNodes()).toHaveLength(1);
});

test('Dropdown Control should set className', () => {
  const dropdownControl = shallow(<DropdownControl className="foo" />);
  expect(dropdownControl.find('.foo').hostNodes()).toHaveLength(1);
});

test('Dropdown Control should close dropdown by click', () => {
  const dropdown = mount(
    <Dropdown trigger="click">
      <DropdownControl />
    </Dropdown>
  );
  expect(dropdown.find('.dropdown_open')).toHaveLength(0);
  dropdown.find('.dropdown').simulate('click');
  expect(dropdown.find('.dropdown_open')).toHaveLength(1);
  dropdown.find('.dropdown__control').simulate('click');
  expect(dropdown.find('.dropdown_open')).toHaveLength(0);
});
