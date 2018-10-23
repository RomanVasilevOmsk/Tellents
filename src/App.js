import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import Landing from './pages/landing';
import './assets/styles/_base.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className="layout-inner">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/landing" component={Landing} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
export default App;
