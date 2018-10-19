import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { getTest } from '../src/selectors';
import { fetchTest } from '../src/reducers/testReducer/actions';
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
      <div className="App">
        <ul>
          {viewTest.map(test => (
            <li key={test.id}>{test.testName}</li>
          ))}
        </ul>
      </div>
    );
  }
}

App.propTypes = {
  viewTest: PropTypes.array.isRequired,
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
