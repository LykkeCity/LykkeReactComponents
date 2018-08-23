import {mount} from 'enzyme';
import React from 'react';
import Message, {MessageType} from '../Message';

const getTestMessage = (options: any = {}) => (
  <Message
    type={options.type || MessageType.Note}
    subtitle={options.subtitle}
    className={options.className}
  >
    Lykke KYC officers cannot change the order of users for performing KYC
    checks and don’t have an ability to visually recognize partners’ users from
    Lykke Wallet users.
  </Message>
);

test('Message should render content', () => {
  const wrapper = mount(getTestMessage());
  expect(wrapper.find('.lykke-message__title')).toHaveLength(1);
  expect(wrapper.find('.lykke-message__text')).toHaveLength(1);
});

test('Message should set default className', () => {
  const wrapper = mount(getTestMessage());
  expect(wrapper.find('.lykke-message').hostNodes()).toHaveLength(1);
  expect(wrapper.find('.note').hostNodes()).toHaveLength(1);
});

test('Message should set className from parameters', () => {
  const className = 'foo';
  const wrapper = mount(getTestMessage({className}));
  expect(wrapper.find(`.${className}`).hostNodes()).toHaveLength(1);
});

test('Message should render default title related to message type', () => {
  let wrapper = mount(getTestMessage({type: MessageType.Note}));
  expect(wrapper.find('.lykke-message__title').text()).toBe('Note');

  wrapper = mount(getTestMessage({type: MessageType.Identified}));
  expect(wrapper.find('.lykke-message__title').text()).toBe('Identified');

  wrapper = mount(getTestMessage({type: MessageType.Update}));
  expect(wrapper.find('.lykke-message__title').text()).toBe('Update');

  wrapper = mount(getTestMessage({type: MessageType.Information}));
  expect(wrapper.find('.lykke-message__title').text()).toBe('Information');
});

test('Message should not render subtitle if subtitle not passed in parameters', () => {
  const wrapper = mount(getTestMessage());
  expect(wrapper.find('.lykke-message__subtitle').hostNodes()).toHaveLength(0);
});

test('Message should render subtitle from parameters', () => {
  const subtitle = '12:32 CET';
  const wrapper = mount(getTestMessage({subtitle}));
  expect(wrapper.find('.lykke-message__subtitle').hostNodes()).toHaveLength(1);
  expect(wrapper.find('.lykke-message__subtitle').text()).toBe(
    ` ⋅ ${subtitle}`
  );
});
