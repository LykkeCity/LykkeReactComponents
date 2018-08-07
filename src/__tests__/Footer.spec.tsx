import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Footer from '../Footer';

Enzyme.configure({adapter: new Adapter()});

test('Footer should be footer by default', () => {
  const footer = shallow(<Footer />);
  expect(footer.closest('footer')).toHaveLength(1);
});

test('Footer should render current year', () => {
  const footer = shallow(<Footer />);
  const currentYear = new Date().getFullYear();
  expect(footer.find('.copy').text()).toContain(currentYear);
});
