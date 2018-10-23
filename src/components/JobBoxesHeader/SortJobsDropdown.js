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
    console.log(`Option selected:`, selectedOption);
  };
  render() {
    return (
      <div className="sort-nav">
        <span className="sort-nav-title">Sort By</span>
        <Select defaultValue={options[0]} isSearchable={false} onChange={this.handleChange} options={options} />
        <span className="sort-result">
          Result:
          <span className="sort-result-numb">25</span>
        </span>
      </div>
    );
  }
}

SortJobsDropdown.propTypes = {
  onOpenDropDown: PropTypes.func,
  isDropDownOpened: PropTypes.bool,
};

export default SortJobsDropdown;
