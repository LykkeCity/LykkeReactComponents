import {mount, shallow} from 'enzyme';
import React from 'react';
import {ErrorIcon} from '../AppError';

test('Error Icon should be div by default', () => {
  const errorIcon = shallow(<ErrorIcon />);
  expect(errorIcon.closest('div')).toHaveLength(1);
});

test('Error Icon should set background color', () => {
  const errorIcon = mount(<ErrorIcon backgroundColor="#fff" />);
  expect(errorIcon.props().backgroundColor).toEqual('#fff');
  errorIcon.setProps({backgroundColor: '#000'});
  expect(errorIcon.props().backgroundColor).toEqual('#000');
});

test('Error Icon should set color of the icon', () => {
  const errorIcon = mount(<ErrorIcon signColor="red" />);
  expect(errorIcon.props().signColor).toEqual('red');
});
