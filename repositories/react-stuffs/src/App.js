import React, { Component } from 'react';

import './App.css';
import { TogglePage } from "./pages";

class App extends Component {
  render() {
    return (
      <div className="layout">
        <header>
          <h1>React Examples</h1>
        </header>
        <section className="body">
          <TogglePage></TogglePage>
        </section>
        <footer>
          make by @gibran
        </footer>
      </div>
    );
  }
}

export default App;
