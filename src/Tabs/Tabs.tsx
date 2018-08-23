import classNames from 'classnames';
import React from 'react';
import {HBar} from '../Bar';

export interface TabsProps {
  children: any;
  className?: string;
  tag?: string;
}

export interface TabsState {
  activeTab: number;
}

class Tabs extends React.Component<TabsProps, TabsState> {
  constructor(props: TabsProps) {
    super(props);

    this.state = {
      activeTab: 0
    };
  }

  onTabChange(index: number) {
    this.setState({
      activeTab: index
    });
  }

  get tabs() {
    return [].concat(this.props.children);
  }

  render() {
    const {
      className,
      /* istanbul ignore next */
      tag: Tag = 'div'
    } = this.props;

    return (
      <Tag className={classNames('lykke-tabs', className)}>
        <div className="lykke-tabs-labels">
          {this.tabs.map((tab: any, index: number) => (
            <div
              className={classNames(
                {
                  active: this.state.activeTab === index
                },
                'lykke-tab-label'
              )}
              key={`tab_${index}`}
              onClick={this.onTabChange.bind(this, index)}
            >
              {tab.props.title}
            </div>
          ))}
        </div>
        <HBar />
        {this.tabs[this.state.activeTab]}
      </Tag>
    );
  }
}

export default Tabs;
