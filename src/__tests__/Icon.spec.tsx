import {shallow} from 'enzyme';
import React from 'react';
import {Icon} from '../Icon';

test('Icon should be i by default', () => {
  const icon = shallow(<Icon type="foo" />);
  expect(icon.closest('i')).toHaveLength(1);
});

test('Icon should set className', () => {
  const icon = shallow(<Icon type="foo" className="bar" />);
  expect(icon.find('.bar').hostNodes()).toHaveLength(1);
});

test('Icon should set type', () => {
  const icon = shallow(<Icon type="foo" />);
  expect(icon.find('.icon--foo').hostNodes()).toHaveLength(1);
});
