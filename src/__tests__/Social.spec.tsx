import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Social from '../Social';

Enzyme.configure({adapter: new Adapter()});

test('Social should be ul by default', () => {
  const social = shallow(<Social theme="footer" />);
  expect(social.closest('ul')).toHaveLength(1);
});

test('Social should render 8 icons', () => {
  const social = shallow(<Social theme="footer" />);
  expect(social.find('li')).toHaveLength(8);
});

test('Social should have class from theme', () => {
  const social = shallow(<Social theme="footer" />);
  expect(social.closest('ul').hasClass('social--footer')).toBe(true);
});
