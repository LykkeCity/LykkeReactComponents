import Enzyme, {mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import {Dropdown} from '../Dropdown';

Enzyme.configure({adapter: new Adapter()});

test('Dropdown should not update state on click if trigger is not "click"', () => {
  const dropdown = mount(<Dropdown>Foo</Dropdown>);
  const instance = dropdown.instance() as any;
  instance.setState = jest.fn();
  (dropdown.instance() as any).handleClickOutside();
  expect(instance.setState).not.toBeCalled();
});

test('Dropdown should update state on click if trigger is "click"', () => {
  const dropdown = mount(<Dropdown trigger="click">Foo</Dropdown>);
  const instance = dropdown.instance() as any;
  instance.setState = jest.fn();
  (dropdown.instance() as any).handleClickOutside();
  expect(instance.setState).toBeCalled();
});

test('Dropdown should call onClose callback on click if trigger is "click" and dropdown is open', () => {
  const onClose = jest.fn();
  const dropdown = mount(
    <Dropdown trigger="click" onClose={onClose}>
      Foo
    </Dropdown>
  );
  dropdown.setState({isOpen: true});
  (dropdown.instance() as any).handleClickOutside();
  expect(onClose).toBeCalled();
});

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

test('Dropdown should call onOpen and onClose handlers', () => {
  const handleOpen = jest.fn();
  const handleClose = jest.fn();
  const dropdown = shallow(
    <Dropdown trigger="click" onOpen={handleOpen} onClose={handleClose} />
  );
  expect(handleOpen).not.toBeCalled();
  expect(handleClose).not.toBeCalled();
  dropdown.find('div').simulate('click');
  expect(handleOpen).toBeCalled();
  dropdown.find('div').simulate('click');
  expect(handleClose).toBeCalled();
});
