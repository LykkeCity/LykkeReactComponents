import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import {Table} from '../Table';

Enzyme.configure({adapter: new Adapter()});

test('Table should set className', () => {
  const table = shallow(<Table className="foo" />);
  expect(table.find('.foo').hostNodes()).toHaveLength(1);
});

test('Table should handle responsive property', () => {
  const table = shallow(<Table responsive />);
  expect(table.find('.table-responsive').hostNodes()).toHaveLength(1);
});

test('Table should handle simple property', () => {
  const table = shallow(<Table simple />);
  expect(table.find('.table--simple').hostNodes()).toHaveLength(1);
});

test('Table should handle striped property', () => {
  const table = shallow(<Table striped />);
  expect(table.find('.table-striped').hostNodes()).toHaveLength(1);
});

test('Table should handle transparent property', () => {
  const table = shallow(<Table transparent />);
  expect(table.find('.table--transparent').hostNodes()).toHaveLength(1);
});
