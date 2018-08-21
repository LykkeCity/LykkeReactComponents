import {mount} from 'enzyme';
import React from 'react';
import {HBar} from '../Bar';

const getTestHBar = () => <HBar />;

test('HBar should render div', () => {
  const wrapper = mount(getTestHBar());
  expect(wrapper.find('div')).toHaveLength(1);
  expect(wrapper.find('.horizontal-bar')).toHaveLength(1);
});
