import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import SearchPage from './pages/Search';
import Landing from './pages/landing';
import Overview from './pages/Profile/Overview';
import Messages from './pages/Profile/Messages';
import MyJobs from './pages/Profile/MyJobs';
import MyPromo from './pages/Profile/MyPromo';
import MySkils from './pages/Profile/MySkils';
import Saved from './pages/Profile/Saved';
import MyMedia from './pages/Profile/MyMedia';
import Accounts from './pages/Profile/Accounts';
import Profile from './pages/Profile';
import NoMatch from './pages/NoMatch';
import PrivateRoute from './pages/PrivateRoute';
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
              <Route exact path="/landing" component={Landing} />
              <Route exact path="/profile/overview" component={Overview} />
              <Route exact path="/profile/messages" component={Messages} />
              <Route exact path="/profile/jobs" component={MyJobs} />
              <Route exact path="/profile/promo" component={MyPromo} />
              <Route exact path="/profile/skils" component={MySkils} />
              <Route exact path="/profile/saved" component={Saved} />
              <Route exact path="/profile/media" component={MyMedia} />
              <Route exact path="/profile/accounts" component={Accounts} />
              <Route exact path="/profile/profile" component={Profile} />
              <PrivateRoute isAuthenticated={isAuthenticated} path="/" component={SearchPage} />
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
