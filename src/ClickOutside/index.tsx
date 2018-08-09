import React from 'react';
import ReactDOM from 'react-dom';

export interface ClickOutsideProps {
  children?: React.ReactChild;
  onClickOutside?: () => void;
}

export class ClickOutside extends React.Component<ClickOutsideProps, {}> {
  constructor(props: ClickOutsideProps) {
    super(props);
  }

  componentDidMount() {
    document.addEventListener('click', this.handleDocumentClick, false);
    document.addEventListener('touchend', this.handleDocumentClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleDocumentClick, false);
    document.removeEventListener('touchend', this.handleDocumentClick, false);
  }

  handleDocumentClick = (e: MouseEvent | TouchEvent) => {
    /* istanbul ignore else */
    if (!ReactDOM.findDOMNode(this).contains(e.target as Node)) {
      /* istanbul ignore else */
      if (this.props.onClickOutside) {
        this.props.onClickOutside();
      }
    }
  };

  render() {
    return <div>{this.props.children}</div>;
  }
}

export default ClickOutside;
