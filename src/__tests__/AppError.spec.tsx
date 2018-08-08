import Enzyme, {mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import {AppError} from '../AppError';

Enzyme.configure({adapter: new Adapter()});

test('Application Error section should be div by default', () => {
  const appError = shallow(<AppError />);
  expect(appError.closest('div')).toHaveLength(1);
});

test('Application Error should support custom tag', () => {
  const appError = shallow(<AppError tag="section" />);
  expect(appError.find('section').hostNodes()).toHaveLength(1);
});

test('Application Error should set className', () => {
  const appError = shallow(<AppError className="foo" />);
  expect(appError.find('.foo').hostNodes()).toHaveLength(1);
});

test('Application Error should set reload button text', () => {
  const appError = mount(<AppError reloadButtonText="button" />);
  expect(appError.find('.btn').text()).toBe('button');
});

test('Application Error should set reload button url', () => {
  const appError = mount(<AppError reloadButtonUrl="/url" />);
  expect(appError.find({href: '/url'})).toHaveLength(1);
});

test('Application Error should set description', () => {
  const appError = mount(<AppError description="foo" />);
  expect(appError.find('.app-error__description').text()).toContain('foo');
});

test('Application Error should set status text', () => {
  const appError = mount(<AppError statusText="foo" />);
  expect(appError.find('.app-error__status-text').text()).toBe('foo');
});

test('Application Error should set auxiliary text', () => {
  const appError = mount(<AppError auxiliaryText="foo" />);
  expect(appError.find('.app-error__auxiliary-text span').text()).toBe('foo');
});

test('Application Error should set email', () => {
  const appError = mount(<AppError email="foo" />);
  expect(appError.find({href: 'mailto:foo'}).text()).toBe('foo');
});
