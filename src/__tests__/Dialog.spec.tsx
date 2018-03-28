import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import {Dialog} from '../Dialog';

Enzyme.configure({adapter: new Adapter()});

test('Dialog should be div by default', () => {
  const dialog = mount(<Dialog />);
  expect(dialog.find('div.modal')).toHaveLength(1);
});

test('Dialog should support custom tag', () => {
  const dialog = mount(<Dialog tag="span" />);
  expect(dialog.find('span.modal')).toHaveLength(1);
});

test('Dialog should set className', () => {
  const dialog = mount(<Dialog className="foo" />);
  expect(dialog.find('.foo').hostNodes()).toHaveLength(1);
});

test('Dialog should handle visible property', () => {
  let dialog = mount(<Dialog />);
  expect(dialog.find('.in').hostNodes()).toHaveLength(0);
  dialog = mount(<Dialog visible={true} />);
  expect(dialog.find('.in').hostNodes()).toHaveLength(1);
  dialog.setProps({visible: false});
  expect(dialog.find('.in').hostNodes()).toHaveLength(0);
});

test('Dialog should handle title property', () => {
  let dialog = mount(<Dialog />);
  expect(dialog.find('.modal__title').text()).toBe('');
  dialog = mount(<Dialog title="foo" />);
  expect(dialog.find('.modal__title').text()).toBe('foo');
});

test('Dialog should handle description property', () => {
  let dialog = mount(<Dialog />);
  expect(dialog.find('.modal__description').text()).toBe('');
  dialog = mount(<Dialog description="foo" />);
  expect(dialog.find('.modal__description').text()).toBe('foo');
});

test('Dialog should handle confirmButton.text property', () => {
  let dialog = mount(<Dialog />);
  expect(dialog.find('.modal__actions .btn--flat').text()).toBe('Confirm');
  dialog = mount(<Dialog confirmButton={{text: 'foo'}} />);
  expect(dialog.find('.modal__actions .btn--flat').text()).toBe('foo');
});

test('Dialog should handle cancelButton.text property', () => {
  let dialog = mount(<Dialog />);
  expect(dialog.find('.modal__actions .btn--primary').text()).toBe('Cancel');
  dialog = mount(<Dialog cancelButton={{text: 'foo'}} />);
  expect(dialog.find('.modal__actions .btn--primary').text()).toBe('foo');
});

test('Dialog should call onCancel and onConfirm handlers', () => {
  const handleCancel = jest.fn();
  const handleConfirm = jest.fn();
  const dialog = mount(
    <Dialog onCancel={handleCancel} onConfirm={handleConfirm} />
  );
  expect(handleCancel).not.toBeCalled();
  expect(handleConfirm).not.toBeCalled();
  dialog.find('.modal__actions .btn--flat').simulate('click');
  expect(handleConfirm).toBeCalled();
  dialog.find('.modal__actions .btn--primary').simulate('click');
  expect(handleCancel).toBeCalled();
});
