import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import {Icon} from '../Icon';

Enzyme.configure({adapter: new Adapter()});

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
