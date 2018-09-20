import {shallow} from 'enzyme';
import React from 'react';
import {SecondaryMenu} from '../Header/SecondaryMenu';
import {renderLink, secondaryMenuItems} from './Header.spec';

describe('<SecondaryMenu>', () => {
  it('should add custom class name', () => {
    const wrapper = shallow(
      <SecondaryMenu
        className="foo-bar"
        renderLink={renderLink}
        secondaryMenuItems={secondaryMenuItems}
      />
    );
    expect(wrapper.find('.foo-bar').hostNodes()).toHaveLength(1);
  });
});
