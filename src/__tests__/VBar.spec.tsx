import {mount} from 'enzyme';
import React from 'react';
import {VBar} from '../Bar';

const getTestVBar = () => <VBar />;

test('HBar should render div', () => {
  const wrapper = mount(getTestVBar());
  expect(wrapper.find('div')).toHaveLength(1);
  expect(wrapper.find('.lykke-vertical-bar')).toHaveLength(1);
});
