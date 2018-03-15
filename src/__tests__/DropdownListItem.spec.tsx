import Enzyme, {mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import {DropdownListItem} from '../Dropdown';

Enzyme.configure({adapter: new Adapter()});

test('Dropdown List Item should render children', () => {
  const dropdownListItem = mount(<DropdownListItem>Foo</DropdownListItem>);
  expect(dropdownListItem.text()).toBe('Foo');
});

test('Dropdown List Item should be li by default', () => {
  const dropdownListItem = shallow(<DropdownListItem />);
  expect(dropdownListItem.closest('li')).toHaveLength(1);
});

test('Dropdown List Item should support custom tag', () => {
  const dropdownListItem = shallow(<DropdownListItem tag="span" />);
  expect(dropdownListItem.find('span').hostNodes()).toHaveLength(1);
});

test('Dropdown List Item should set className', () => {
  const dropdownListItem = shallow(<DropdownListItem className="foo" />);
  expect(dropdownListItem.find('.foo').hostNodes()).toHaveLength(1);
});

test('Dropdown should handle isCategory property', () => {
  let dropdownListItem = shallow(<DropdownListItem />);
  expect(
    dropdownListItem.find('.dropdown-list__item_category').hostNodes()
  ).toHaveLength(0);
  dropdownListItem = shallow(<DropdownListItem isCategory={true} />);
  expect(
    dropdownListItem.find('.dropdown-list__item_category').hostNodes()
  ).toHaveLength(1);
});
