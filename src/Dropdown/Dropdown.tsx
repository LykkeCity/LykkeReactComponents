import classnames from 'classnames';
import React from 'react';
import {ClickOutside} from '../ClickOutside';
import './style.css';

export interface DropdownProps {
  children?: React.ReactChild | React.ReactChild[];
  className?: string;
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
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
      this.setState(
        {
          isOpen: false
        },
        () => {
          if (this.props.onClose) {
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
      isOpen,
      onOpen,
      onClose,
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
            this.state.isOpen ? 'dropdown_open' : '',
            trigger === 'click' ? 'dropdown_clickable' : ''
          )}
        >
          {children}
        </Tag>
      </ClickOutside>
    );
  }
}

export default Dropdown;
