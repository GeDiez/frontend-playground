import React, { Component } from 'react';
import classname from "classnames";

import './toggle.css';
import { Toggle } from '../../components';

const ToggleButton = ({onClickOn, onClickOff, isActive}) => (

    <div className="button-toggleable">
      <button className={classname({'is-active': isActive})} onClick={onClickOn}>On</button>
      <button className={classname({'is-active': !isActive})} onClick={onClickOff}>Off</button>
    </div>

)

export class TogglePage extends Component {
  render() {
    return (
      <div className="explanation">
        <h2>Toggle with render props</h2>
        <summary>
          Toggle is a sort of bahavior used in a lot of components like; modals, toggle buttons, tooltips, or where we have two options either true or false basically
        </summary>
        <article>
          <blockquote>
            <pre className="lang-javascript prettyprint">
                {`
class Toggle extends Component {
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
                `}
            </pre>
          </blockquote>
        </article>
        <h2>Toggle button example</h2>
        <summary>
          In this case we can reuse the toggle behavior and make our component separatly
        </summary>
        <article className="example">
          <Toggle isInitialOpen={false}>
            {({isOpen, open, close}) => (
              <ToggleButton onClickOn={open} onClickOff={close} isActive={isOpen} />
            )}
          </Toggle>
        </article>
      </div>
    );
  }
}
