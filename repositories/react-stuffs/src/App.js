import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import 'bulma/css/bulma.css';
import './App.css';

import { TogglePage, SelectorPage } from "./pages";

const { location } = window;

const Layout = ({match, ...rest}) => {
  const pages = {
    toggle: TogglePage,
    selector: SelectorPage,
  }
  console.log(match, rest)
  const Page = pages[match.params.page] || pages.toggle;

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
          <Route path="/:page" component={Layout}></Route>
          <Redirect to={`/${location.search.split('=')[1]}`}></Redirect>
        </Switch>
      </Router>
    );
  }
}

export default App;
