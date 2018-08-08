import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import {ClickOutside} from '../ClickOutside';

Enzyme.configure({adapter: new Adapter()});

const onClick = jest.fn();
const getTestBlockWithClickOutside = (onClickOutside?: () => void) => (
  <ClickOutside onClickOutside={onClickOutside}>
    <div>Content</div>
  </ClickOutside>
);

test('Component should add click actions on document', () => {
  document.addEventListener = jest.fn();
  const wrapper = mount(getTestBlockWithClickOutside());
  const clickCallback = (wrapper.instance() as any).handleDocumentClick;
  expect(document.addEventListener).toHaveBeenCalledWith(
    'click',
    clickCallback,
    false
  );
  expect(document.addEventListener).toHaveBeenCalledWith(
    'touchend',
    clickCallback,
    false
  );
});

test('Component should add click actions on document', () => {
  document.removeEventListener = jest.fn();
  const wrapper = mount(getTestBlockWithClickOutside());
  const clickCallback = (wrapper.instance() as any).handleDocumentClick;
  wrapper.unmount();
  expect(document.removeEventListener).toHaveBeenCalledWith(
    'click',
    clickCallback,
    false
  );
  expect(document.removeEventListener).toHaveBeenCalledWith(
    'touchend',
    clickCallback,
    false
  );
});

test('Component should call callback if user make a click outside component', () => {
  const onClickOutside = jest.fn();
  const wrapper = mount(getTestBlockWithClickOutside(onClickOutside));

  (wrapper.instance() as any).handleDocumentClick({});

  expect(onClickOutside).toHaveBeenCalled();
});
