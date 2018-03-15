import Enzyme, {mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import {Dropdown} from '../Dropdown';

Enzyme.configure({adapter: new Adapter()});

test('Dropdown should render children', () => {
  const dropdown = mount(<Dropdown>Foo</Dropdown>);
  expect(dropdown.text()).toBe('Foo');
});

test('Dropdown should be div by default', () => {
  const dropdown = shallow(<Dropdown />);
  expect(dropdown.find('div').hostNodes()).toHaveLength(1);
});

test('Dropdown should support custom tag', () => {
  const dropdown = shallow(<Dropdown tag="span" />);
  expect(dropdown.find('span').hostNodes()).toHaveLength(1);
});

test('Dropdown should set className', () => {
  const dropdown = shallow(<Dropdown className="foo" />);
  expect(dropdown.find('.foo').hostNodes()).toHaveLength(1);
});

test('Dropdown should handle isOpen property', () => {
  let dropdown = shallow(<Dropdown />);
  expect(dropdown.find('.dropdown_open').hostNodes()).toHaveLength(0);
  dropdown = shallow(<Dropdown isOpen={true} />);
  expect(dropdown.find('.dropdown_open').hostNodes()).toHaveLength(1);
  dropdown.setProps({isOpen: false});
  expect(dropdown.find('.dropdown_open').hostNodes()).toHaveLength(0);
});

test('Dropdown should be triggered by click or hover', () => {
  let dropdown = shallow(<Dropdown />);
  dropdown.find('div').simulate('click');
  expect(dropdown.find('.dropdown_open').hostNodes()).toHaveLength(0);
  dropdown = shallow(<Dropdown trigger="click" />);
  dropdown.find('div').simulate('click');
  expect(dropdown.find('.dropdown_open').hostNodes()).toHaveLength(1);
});

test('Dropdown should call onOpen handler', () => {
  const handleOpen = jest.fn();
  const dropdown = shallow(<Dropdown trigger="click" onOpen={handleOpen} />);
  expect(handleOpen).not.toBeCalled();
  dropdown.find('div').simulate('click');
  expect(handleOpen).toBeCalled();
});
