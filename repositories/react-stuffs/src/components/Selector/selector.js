import { Component } from 'react';
import PropTypes from 'prop-types';

export class Selector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selects: props.initialList,
    };
  }

  editSelect = (key, isSelect) => {
    const { selects } = this.state;
    const { validate } = this.props;
    const keysSelected = this.getKeysSelected();
    const newState = {
      selects: validate({ selects, key, isSelect, keysSelected }),
    };

    this.setState(newState, () => this.props.onChange(newState));
  }

  toggle = key => {
    this.editSelect(key, !this.state.selects[key].isSelect);
  }

  select = key => {
    this.editSelect(key, true);
  };

  unselect = key => {
    this.editSelect(key, false);
  };

  getKeysSelected = () => {
    const { selects } = this.state;
    return Object.keys(selects).filter(key => selects[key].isSelect);
  }

  render() {
    const { selects } = this.state;
    return this.props.children({
      selects,
      select: this.select,
      unselect: this.unselect,
      toggle: this.toggle,
    });
  }
}

Selector.propTypes = {
  children: PropTypes.func.isRequired,
  validate: PropTypes.func,
  onChange: PropTypes.func,
  initialList: PropTypes.objectOf(PropTypes.shape({
    isSelect: PropTypes.bool.isRequired,
    //can receive any props else
    anyProp: () => true
  })).isRequired,
};

Selector.defaultProps = {
  validate: (state) => state,
  onChange: () => {},
  initialList: {},
};
