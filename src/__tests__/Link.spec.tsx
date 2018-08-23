import {mount} from 'enzyme';
import React from 'react';
import Link, {LinkColor} from '../Link';

const href = 'test.com';
const getTestLink = (color?: LinkColor) => (
  <Link href={href} color={color}>
    Test link
  </Link>
);

test('Link should render a', () => {
  const wrapper = mount(getTestLink());
  expect(wrapper.find('a')).toHaveLength(1);
  expect(wrapper.find('.lykke-link')).toHaveLength(1);
});

test('Link should render black link', () => {
  const wrapper = mount(getTestLink(LinkColor.Black));
  expect(wrapper.find('.black')).toHaveLength(1);
});

test('Link should link to href from parameter', () => {
  const wrapper = mount(getTestLink());
  expect((wrapper.find('a').props() as any).href).toBe(href);
});
