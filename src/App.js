import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect, Link, withRouter } from 'react-router-dom';

import Overview from './components/Overview';
import Workers from './components/Workers';
import Jobs from './components/Jobs';

import './App.css';

class App extends Component {
  render() {
    const Nav = withRouter(props => (
      <ul className="nav-bar">
        <li className={props.location.pathname === "/" ? "active" : ""}><Link to="/">Overview</Link></li>
        <li className={props.location.pathname === "/workers" ? "active" : ""}><Link to="/workers">Workers</Link></li>
        <li className={props.location.pathname === "/jobs" ? "active" : ""}><Link to="/jobs">Jobs</Link></li>
      </ul>
    ));
    return (
      <BrowserRouter>
        <div>
          <header>
            <h4><small>Die</small>Mensch Maschine</h4>
          </header>
          <hr />
          <Nav />
          <div className="page-content">
            <Switch>
              <Route path="/" exact={true} component={Overview} />
              <Route path="/workers" component={Workers} />
              <Route path="/jobs" component={Jobs} />
              <Route render={() => <Redirect to="/" />} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
