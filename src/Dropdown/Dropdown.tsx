import classnames from 'classnames';
import React from 'react';
import {ClickOutside} from '../ClickOutside';
import './style.css';

export const DropdownPosition = {
  BOTTOM: 'bottom',
  RIGHT: 'right'
};

export interface DropdownProps {
  children?: React.ReactChild | React.ReactChild[];
  className?: string;
  fullHeight?: boolean;
  isTooltip?: boolean;
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  position?: string;
  tag?: string;
  trigger?: string;
}

export interface DropdownState {
  isOpen?: boolean;
}

export class Dropdown extends React.Component<DropdownProps, DropdownState> {
  constructor(props: DropdownProps) {
    super(props);

    this.state = {
      isOpen: props.isOpen
    };
  }

  componentWillReceiveProps(nextProps: DropdownProps) {
    if (nextProps.isOpen !== this.state.isOpen) {
      this.setState({isOpen: nextProps.isOpen});
    }
  }

  handleClick = (e: MouseEvent | TouchEvent) => {
    if (this.props.trigger === 'click') {
      this.setState(
        prevState => ({
          isOpen: !prevState.isOpen
        }),
        () => {
          const toggleHandler = this.state.isOpen
            ? this.props.onOpen
            : this.props.onClose;

          if (toggleHandler) {
            toggleHandler();
          }
        }
      );
    }
  };

  handleClickOutside = () => {
    if (this.props.trigger === 'click') {
      const wasOpen = this.state.isOpen;
      this.setState(
        {
          isOpen: false
        },
        () => {
          if (wasOpen && this.props.onClose) {
            this.props.onClose();
          }
        }
      );
    }
  };

  render() {
    const {
      children,
      className,
      fullHeight,
      isTooltip,
      isOpen,
      onOpen,
      onClose,
      position = 'bottom',
      tag: Tag = 'div',
      trigger = 'hover',
      ...props
    } = this.props;

    return (
      <ClickOutside onClickOutside={this.handleClickOutside}>
        <Tag
          {...props}
          onClick={this.handleClick}
          className={classnames(
            'dropdown',
            className,
            {dropdown_open: this.state.isOpen},
            {dropdown_right: position === DropdownPosition.RIGHT},
            {dropdown_clickable: trigger === 'click'},
            {dropdown_fullheight: fullHeight},
            {dropdown_tooltip: isTooltip}
          )}
        >
          {children}
        </Tag>
      </ClickOutside>
    );
  }
}

export default Dropdown;
