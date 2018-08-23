import {mount, shallow} from 'enzyme';
import React from 'react';
import {Error404} from '../Error404';

test('Error 404 should be div by default', () => {
  const error404 = shallow(<Error404 />);
  expect(error404.closest('div')).toHaveLength(1);
});

test('Error 404 should support custom tag', () => {
  const error404 = shallow(<Error404 tag="section" />);
  expect(error404.find('section').hostNodes()).toHaveLength(1);
});

test('Error 404 should set className', () => {
  const error404 = shallow(<Error404 className="foo" />);
  expect(error404.find('.foo').hostNodes()).toHaveLength(1);
});

test('Error 404 should set button text', () => {
  const error404 = mount(<Error404 buttonText="foo" />);
  expect(error404.find('.btn').text()).toBe('foo');
});

test('Error 404 should set button url', () => {
  const error404 = mount(<Error404 buttonUrl="/foo" />);
  expect(error404.find({href: '/foo'})).toHaveLength(1);
});

test('Error 404 should set description', () => {
  const error404 = mount(<Error404 description="foo" />);
  expect(error404.find('.lykke-error-404__description').text()).toContain(
    'foo'
  );
});

test('Error 404 should set email', () => {
  const error404 = mount(<Error404 email="foo" />);
  expect(error404.find({href: 'mailto:foo'}).text()).toBe('foo');
});

test('Error 404 should set status text', () => {
  const error404 = mount(<Error404 statusText="foo" />);
  expect(error404.find('.lykke-error-404__status-text').text()).toBe('foo');
});
