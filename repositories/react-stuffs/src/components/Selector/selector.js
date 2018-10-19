import { Component } from 'react';
import PropTypes from 'prop-types';

export class Selector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.items,
    };
  }

  updateItems = (key, isSelected) => {
    const { items } = this.state;
    const { beforeUpdate, onChange } = this.props;
    const selectedItems = this.getSelectedItems();
    const item = { ...items[key], isSelected };
    const newState = {
      items: beforeUpdate({ items, item, key, selectedItems }),
    };

    this.setState(newState, () => onChange(newState));
  }

  toggle = key => {
    const { items } = this.state;
    this.updateItems(key, !items[key].isSelected);
  }

  select = key => {
    this.updateItems(key, true);
  };

  unselect = key => {
    this.updateItems(key, false);
  };

  getSelectedItems = () => {
    const { items } = this.state;
    return Object.keys(items).filter(key => items[key].isSelected);
  }

  render() {
    const { items } = this.state;
    return this.props.children({
      items,
      select: this.select,
      unselect: this.unselect,
      toggle: this.toggle,
      selectedItems: this.getSelectedItems()
    });
  }
}

Selector.propTypes = {
  children: PropTypes.func.isRequired,
  beforeUpdate: PropTypes.func,
  onChange: PropTypes.func,
  initialList: PropTypes.objectOf(PropTypes.shape({
    isSelected: PropTypes.bool.isRequired,
    //can receive any props else
    anyProp: () => true
  })).isRequired,
};

Selector.defaultProps = {
  beforeUpdate: ({items, item, key}) => ({...items, [key]: item }),
  onChange: () => {},
  initialList: {},
};
