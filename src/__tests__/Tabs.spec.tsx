import {shallow} from 'enzyme';
import React from 'react';
import {Tab, Tabs} from '..';

const getTestTabs = () => {
  return (
    <Tabs>
      <Tab title="Test 1" />
      <Tab title="Test 2" />
    </Tabs>
  );
};

describe('<Tabs>', () => {
  it('should render correct tab container with single tab', () => {
    const wrapper = shallow(
      <Tabs>
        <Tab title="Test" />
      </Tabs>
    );
    expect(wrapper.find('Tab')).toHaveLength(1);
  });

  it('should render content of active tab only', () => {
    const wrapper = shallow(getTestTabs());
    expect(wrapper.find('Tab')).toHaveLength(1);
  });

  it('should render titles of all tabs', () => {
    const wrapper = shallow(getTestTabs());
    const testTabTitles = wrapper.find('.lykke-tab-label');
    expect(testTabTitles.at(0).text()).toBe('Test 1');
    expect(testTabTitles.at(1).text()).toBe('Test 2');
    expect(testTabTitles).toHaveLength(2);
  });

  it('should set first tab active by default', () => {
    const wrapper = shallow(getTestTabs());
    const firstTabTitle = wrapper.find('.lykke-tab-label').at(0);
    expect(wrapper.state('activeTab')).toBe(0);
    expect(firstTabTitle.hasClass('active')).toBe(true);
  });

  it('should change active tab state when we click on non-active tab', () => {
    const wrapper = shallow(getTestTabs());
    const secondTabTitle = wrapper.find('.lykke-tab-label').at(1);
    secondTabTitle.simulate('click');
    expect(wrapper.state('activeTab')).toBe(1);
  });
});
