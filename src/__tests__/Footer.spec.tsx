import {shallow} from 'enzyme';
import React from 'react';
import Footer from '../Footer';

test('Footer should be footer by default', () => {
  const footer = shallow(<Footer />);
  expect(footer.closest('footer')).toHaveLength(1);
});

test('Footer should render current year', () => {
  const footer = shallow(<Footer />);
  const currentYear = new Date().getFullYear();
  expect(footer.find('.copy').text()).toContain(currentYear);
});
