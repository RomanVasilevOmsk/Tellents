import React from 'react';
import PropTypes from 'prop-types';

const dropDown = WrappedComponent => {
  return class DropDown extends React.Component {
    state = {
      isDropDownOpened: false,
    };
    openDropDown = () => {
      this.setState({ isDropDownOpened: !this.state.isDropDownOpened });
    };

    render() {
      const { ...props } = this.props;
      const { isDropDownOpened } = this.state;
      return <WrappedComponent onOpenDropDown={this.openDropDown} isDropDownOpened={isDropDownOpened} {...props} />;
    }
  };
};

dropDown.propTypes = {
  dropDownRenderer: PropTypes.func,
};

export default dropDown;
