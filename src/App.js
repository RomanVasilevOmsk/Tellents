import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import SearchPage from './pages/Search';
import Landing from './pages/landing';
import MySkils from './pages/Profile/MySkils';
import UserJobs from './pages/Profile/UserJobs';
import NoMatch from './pages/NoMatch';
import PrivateRoute from './HOCS/PrivateRoute';
import './assets/styles/_base.scss';
import appContainer from './containers/AppContainer';

class App extends Component {
  render() {
    const { isAuthenticated } = this.props;

    return (
      <div className="App">
        <Router>
          <div className="layout-inner">
            <Switch>
              <Route exact path="/" component={Landing} />
              <PrivateRoute isAuthenticated={isAuthenticated} path="/search" component={SearchPage} />
              <PrivateRoute isAuthenticated={isAuthenticated} path="/skils" component={MySkils} />
              <PrivateRoute isAuthenticated={isAuthenticated} path="/dashboard/:userJobsId" component={UserJobs} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

App.propTypes = {
  isAuthenticated: PropTypes.bool,
};

export default appContainer(App);
