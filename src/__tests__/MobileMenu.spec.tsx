import {mount, shallow} from 'enzyme';
import React from 'react';
import {MobileMenu} from '../Header/MobileMenu';
import {headerLinkOptions, renderLink, secondaryMenuItems} from './Header.spec';

describe('<MobileMenu>', () => {
  it('should add custom class name', () => {
    const handleCloseClick = jest.fn();
    const wrapper = shallow(
      <MobileMenu
        className="foo-bar"
        userName="Foo Bar"
        onCloseClick={handleCloseClick}
        headerLinkOptions={headerLinkOptions}
        renderLink={renderLink}
        secondaryMenuItems={secondaryMenuItems}
      />
    );
    expect(wrapper.find('.foo-bar').hostNodes()).toHaveLength(1);
  });

  it('should contain user initials if userName provided', () => {
    const handleCloseClick = jest.fn();
    const wrapper = mount(
      <MobileMenu
        className="foo-bar"
        userName="Foo Bar"
        onCloseClick={handleCloseClick}
        headerLinkOptions={headerLinkOptions}
        renderLink={renderLink}
        secondaryMenuItems={secondaryMenuItems}
      />
    );
    expect(wrapper.find('.user-avatar').text()).toBe('FB');
  });

  it('should contain get started button if userName not provided', () => {
    const handleCloseClick = jest.fn();
    const wrapper = mount(
      <MobileMenu
        className="foo-bar"
        onCloseClick={handleCloseClick}
        renderLink={renderLink}
        headerLinkOptions={headerLinkOptions}
        secondaryMenuItems={secondaryMenuItems}
      />
    );
    expect(
      wrapper
        .find('.mobile-menu__header')
        .text()
        .toLowerCase()
    ).toBe('get started');
  });

  it('should handle logout', () => {
    const handleCloseClick = jest.fn();
    const wrapper = mount(
      <MobileMenu
        className="foo-bar"
        userName="Foo Bar"
        onCloseClick={handleCloseClick}
        headerLinkOptions={headerLinkOptions}
        renderLink={renderLink}
        secondaryMenuItems={secondaryMenuItems}
      />
    );
    wrapper.find('.mobile-menu__close-btn').simulate('click');
    expect(handleCloseClick).toBeCalled();
  });
});
