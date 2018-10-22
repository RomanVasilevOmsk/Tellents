import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { getTest } from '../src/selectors';
import { fetchTest } from '../src/reducers/testReducer/actions';
import Layout from './components/Layout';
import ContentHeader from './components/ContentHeader';
import JobBoxesHeader from './components/JobBoxesHeader';
import 'bootstrap/dist/js/bootstrap.min.js';
import './assets/styles/_base.scss';

class App extends Component {
  state = {
    isLoaded: false,
  };
  componentDidMount = () => {
    this.props.fetchTest().then(() =>
      this.setState({
        isLoaded: true,
      }),
    );
  };
  render() {
    const { viewTest } = this.props;
    return (
      <div className="App home-page">
        <Layout>
          <ContentHeader />
          <JobBoxesHeader />
          <ul>
            {viewTest.map(test => (
              <li key={test.id}>{test.testName}</li>
            ))}
          </ul>
        </Layout>
      </div>
    );
  }
}

App.propTypes = {
  viewTest: PropTypes.array.isRequired,
  fetchTest: PropTypes.func,
};

const mapStateToProps = state => {
  return {
    viewTest: getTest(state),
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchTest,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
