import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import 'bulma/css/bulma.css';
import './App.css';

import { TogglePage, SelectorPage, NotFound } from "./pages";

const Layout = ({match}) => {
  const pages = {
    toggle: TogglePage,
    selector: SelectorPage,
  }

  const Page = pages[match.params.page] || pages.toggle;

  return (
    <div className="layout">
      <header>
        <h1 className="title">React Examples</h1>
        <a href="/">Inicio</a>
      </header>
      <section className="body">
        <Page></Page>
      </section>
      <footer>
        make by @gibran
      </footer>
    </div>
    );
  }

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/:page" component={Layout}></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
