import classnames from 'classnames';
import React from 'react';
import ReactDOM from 'react-dom';
import {Checkbox} from '../Checkbox';
import {ClickOutside} from '../ClickOutside';
import './style.css';

export interface DialogProps {
  className?: string;
  tag?: string;
  onCancel?: () => void;
  onConfirm?: () => void;
  visible?: boolean;
  closeable?: boolean;
  hasScroll?: boolean;
  confirmButton?: {text: string};
  cancelButton?: {text: string};
  title?: string | JSX.Element;
  description?: string | JSX.Element;
  shouldAccept?: boolean;
  theme?: string;
  actions?: Array<{
    text: string;
    cssClass?: string;
    onClick: () => void;
  }>;
}

export interface DialogState {
  accepted?: boolean;
  visible?: boolean;
}

export class Dialog extends React.Component<DialogProps, DialogState> {
  constructor(props: DialogProps) {
    super(props);

    this.state = {
      accepted: false,
      visible: props.visible
    };
  }

  componentWillReceiveProps(nextProps: DialogProps) {
    if (nextProps.visible !== this.state.visible) {
      this.setState({visible: nextProps.visible});
    }
  }

  handleClickOutside = () => {
    /* istanbul ignore next */
    const {closeable = true, onCancel = () => ({})} = this.props;

    if (this.state.visible && closeable) {
      onCancel();
    }
  };

  handleToggleAccept = () => {
    this.setState(prevState => ({
      accepted: !prevState.accepted
    }));
  };

  handleCancel = () => {
    /* istanbul ignore else */
    if (this.props.onCancel) {
      this.props.onCancel();
    }
  };

  handleConfirm = () => {
    /* istanbul ignore else */
    if (
      this.props.onConfirm &&
      (!this.props.shouldAccept || this.state.accepted)
    ) {
      this.props.onConfirm();
    }
  };

  render() {
    const {
      className,
      onConfirm,
      onCancel,
      tag: Tag = 'div',
      visible,
      confirmButton = {text: 'Confirm'},
      cancelButton = {text: 'Cancel'},
      title,
      description,
      shouldAccept,
      theme = '',
      actions,
      closeable,
      hasScroll,
      ...props
    } = this.props;

    return ReactDOM.createPortal(
      <Tag
        {...props}
        className={classnames(
          'modal fade',
          {in: visible, 'has-scroll': hasScroll},
          className,
          theme
        )}
        tabIndex="-1"
        role="dialog"
      >
        <div className="modal__dialog">
          <div className="modal__inner">
            <div className="modal__content">
              <ClickOutside onClickOutside={this.handleClickOutside}>
                <div className="modal__body">
                  <div className="modal__title">{title}</div>
                  <div className="modal__description">
                    {description}
                    {shouldAccept && (
                      <div>
                        <Checkbox
                          checked={false}
                          label="I hereby accept these terms and regulations"
                          onToggle={this.handleToggleAccept}
                        />
                      </div>
                    )}
                  </div>
                  <div className="modal__actions">
                    {actions ? (
                      actions.map(action => (
                        <button
                          key={action.text}
                          type="button"
                          className={classnames('btn', action.cssClass)}
                          onClick={action.onClick}
                        >
                          {action.text}
                        </button>
                      ))
                    ) : (
                      <div>
                        {confirmButton.text && (
                          <button
                            type="button"
                            className={classnames(
                              'btn btn--primary btn-block',
                              {
                                disabled:
                                  this.props.shouldAccept &&
                                  !this.state.accepted
                              }
                            )}
                            onClick={this.handleConfirm}
                          >
                            {confirmButton.text}
                          </button>
                        )}
                        {cancelButton.text && (
                          <button
                            className="btn btn--flat btn-block"
                            onClick={this.handleCancel}
                          >
                            {cancelButton.text}
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </ClickOutside>
            </div>
          </div>
        </div>
      </Tag>,
      document.body
    ) as React.ReactPortal;
  }
}

export default Dialog;
