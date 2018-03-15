import Enzyme, {mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import {Dropdown, DropdownContainer} from '../Dropdown';

Enzyme.configure({adapter: new Adapter()});

test('Dropdown Container should render children', () => {
  const dropdownContainer = mount(<DropdownContainer>Foo</DropdownContainer>);
  expect(dropdownContainer.text()).toBe('Foo');
});

test('Dropdown Container should be div by default', () => {
  const dropdownContainer = shallow(<DropdownContainer />);
  expect(dropdownContainer.closest('div')).toHaveLength(1);
});

test('Dropdown Container should support custom tag', () => {
  const dropdownContainer = shallow(<DropdownContainer tag="span" />);
  expect(dropdownContainer.find('span').hostNodes()).toHaveLength(1);
});

test('Dropdown Container should set className', () => {
  const dropdownContainer = shallow(<DropdownContainer className="foo" />);
  expect(dropdownContainer.find('.foo').hostNodes()).toHaveLength(1);
});

test("Dropdown Container shouldn't close dropdown by click", () => {
  const dropdown = mount(
    <Dropdown trigger="click">
      <DropdownContainer />
    </Dropdown>
  );
  expect(dropdown.find('.dropdown_open')).toHaveLength(0);
  dropdown.find('.dropdown__container').simulate('click');
  expect(dropdown.find('.dropdown_open')).toHaveLength(0);
  dropdown.find('.dropdown').simulate('click');
  expect(dropdown.find('.dropdown_open')).toHaveLength(1);
});
