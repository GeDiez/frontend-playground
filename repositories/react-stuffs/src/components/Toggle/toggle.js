import { Component } from 'react';
import PropTypes from 'prop-types';

export class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: props.initialIsOpen,
    };
  }

  open = () => {
    this.setState({ isOpen: true });
  };

  close = () => {
    this.setState({ isOpen: false });
  };

  toggle = () => {
    this.setState(state => ({
      isOpen: !state.isOpen,
    }));
  };

  render() {
    const { isOpen } = this.state;
    return this.props.children({
      isOpen,
      close: this.close,
      open: this.open,
      toggle: this.toggle,
    });
  }
}

Toggle.propTypes = {
  children: PropTypes.func,
  initialIsOpen: PropTypes.bool,
};
