import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import 'bulma/css/bulma.css';
import './App.css';

import { TogglePage, SelectorPage } from "./pages";

const Layout = ({location}) => {
  const pages = {
    toggle: TogglePage,
    selector: SelectorPage,
  }

  const paramPage = location.search.split('=')[1];
  const Page = pages[paramPage] || pages.toggle;

  return (
    <div className="layout">
      <header>
        <h1 className="title">React Examples</h1>
        <a href="/frontend-playground">Inicio</a>
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
          <Route path="/" component={Layout}></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
