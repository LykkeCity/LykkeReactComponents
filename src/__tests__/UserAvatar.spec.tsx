import {shallow} from 'enzyme';
import React from 'react';
import {UserAvatar} from '../Header/UserAvatar';

describe('<UserAvatar>', () => {
  it('should add custom class name', () => {
    const wrapper = shallow(
      <UserAvatar userName="Foo Bar" className="foo-bar" />
    );
    expect(wrapper.find('.foo-bar').hostNodes()).toHaveLength(1);
  });

  it('should handle empty userName', () => {
    const wrapper = shallow(<UserAvatar userName="" />);
    expect(wrapper.find('.user-avatar').text()).toBe('');
  });

  it('should contain user initials from 1 words', () => {
    const wrapper = shallow(<UserAvatar userName="Foo" />);
    expect(wrapper.find('.user-avatar').text()).toBe('F');
  });

  it('should contain user initials from 2 words', () => {
    const wrapper = shallow(<UserAvatar userName="Foo Bar" />);
    expect(wrapper.find('.user-avatar').text()).toBe('FB');
  });

  it('should contain user initials from n words', () => {
    const wrapper = shallow(<UserAvatar userName="Foo Bar Baz Qux" />);
    expect(wrapper.find('.user-avatar').text()).toBe('FQ');
  });
});
