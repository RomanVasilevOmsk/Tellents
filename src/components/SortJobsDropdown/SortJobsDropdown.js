import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

const options = [
  { value: 'relevance', label: 'Relevance' },
  { value: 'date', label: 'Date' },
  { value: 'rate', label: 'Rate' },
  { value: 'alfabet', label: 'Alfabet' },
];

class SortJobsDropdown extends React.Component {
  state = {
    selectedOption: null,
  };

  handleChange = selectedOption => {
    this.setState({ selectedOption });
  };

  render() {
    const { result } = this.props;
    return (
      <div className="sort-nav">
        <span className="sort-nav-title">Sort By</span>
        <Select defaultValue={options[0]} isSearchable={false} onChange={this.handleChange} options={options} />
        <span className="sort-result">
          Result:
          <span className="sort-result-numb">{result}</span>
        </span>
      </div>
    );
  }
}

SortJobsDropdown.propTypes = {
  result: PropTypes.number,
};

export default SortJobsDropdown;
