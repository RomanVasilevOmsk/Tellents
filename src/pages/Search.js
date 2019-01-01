import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Layout from '../components/Layouts';
import ContentHeader from '../components/ContentHeader';
import JobBoxesHeader from '../components/JobBoxesHeader';
import JobBoxes from '../components/JobBoxes';
// import { getTest } from '../selectors';
// import { fetchTest } from '../reducers/testReducer/actions';

class SearchPage extends React.Component {
  state = {
    dataArrow: true,
    isLoaded: false,
    jobTalentsToogler: 'jobs',
  };
  // componentDidMount = () => {
  //   this.props.fetchTest().then(() =>
  //     this.setState({
  //       isLoaded: true,
  //     }),
  //   );
  // };

  onChangeJobTalentsToogler = value => {
    this.setState({ jobTalentsToogler: value });
  };
  onToogleJobTalentsToogler = () => {
    if (this.state.jobTalentsToogler === 'jobs') {
      this.setState({ jobTalentsToogler: 'talents' });
    }
    if (this.state.jobTalentsToogler === 'talents') {
      this.setState({ jobTalentsToogler: 'jobs' });
    }
  };

  render() {
    // const { viewTest } = this.props;
    return (
      <div className="home-page">
        <div className="wrapper">
          <Layout>
            <div className="container-fluid">
              <ContentHeader />
              <JobBoxesHeader
                jobTalentsToogler={this.state.jobTalentsToogler}
                onChangeJobTalentsToogler={this.onChangeJobTalentsToogler}
                onToogleJobTalentsToogler={this.onToogleJobTalentsToogler}
              />
              <JobBoxes jobTalentsToogler={this.state.jobTalentsToogler} dataArrow={this.state.dataArrow} />
              {/* <ul>
                {viewTest.map(test => (
                  <li key={test.id}>{test.testName}</li>
                ))}
              </ul> */}
            </div>
          </Layout>
        </div>
      </div>
    );
  }
}

SearchPage.propTypes = {
  // viewTest: PropTypes.array.isRequired,
  // fetchTest: PropTypes.func,
};

const mapStateToProps = state => {
  return {
    // viewTest: getTest(state),
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      // fetchTest,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchPage);
