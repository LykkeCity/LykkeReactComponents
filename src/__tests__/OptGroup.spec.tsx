import Enzyme, {mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import {OptGroup} from '../Select';

Enzyme.configure({adapter: new Adapter()});

test('OptGroup should render children', () => {
  const optGroup = mount(<OptGroup>Foo</OptGroup>);
  expect(optGroup.text()).toBe('Foo');
});

test('OptGroup should set className', () => {
  const optGroup = shallow(<OptGroup className="foo" />);
  expect(optGroup.find('.foo').hostNodes()).toHaveLength(1);
});

test('OptGroup should handle isVisible property', () => {
  let optGroup = mount(<OptGroup />);
  expect(optGroup.find('.hidden').hostNodes()).toHaveLength(0);
  optGroup = mount(<OptGroup isVisible={false} />);
  expect(optGroup.find('.hidden').hostNodes()).toHaveLength(1);
});
