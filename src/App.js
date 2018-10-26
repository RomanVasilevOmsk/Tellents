import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SearchPage from './pages/Search';
import Landing from './pages/Landing';
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
import './assets/styles/_base.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className="layout-inner">
            <Switch>
              <Route exact path="/" component={SearchPage} />
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
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
export default App;
