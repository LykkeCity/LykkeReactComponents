import Enzyme, {mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import {ErrorIcon} from '../AppError';

Enzyme.configure({adapter: new Adapter()});

test('Application Error section should be div by default', () => {
  const errorIcon = shallow(<ErrorIcon />);
  expect(errorIcon.closest('div')).toHaveLength(1);
});

test('Application Error should set reload button text', () => {
  const errorIcon = mount(<ErrorIcon backgroundColor="#fff" />);
  expect(errorIcon.props().backgroundColor).toEqual('#fff');
  errorIcon.setProps({backgroundColor: '#000'});
  expect(errorIcon.props().backgroundColor).toEqual('#000');
});

test('Application Error should set reload button text', () => {
  const errorIcon = mount(<ErrorIcon signColor="red" />);
  expect(errorIcon.props().signColor).toEqual('red');
});
