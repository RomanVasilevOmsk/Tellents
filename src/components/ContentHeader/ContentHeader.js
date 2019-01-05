import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HelloHeader from '../HelloHeader';
import FormMainSearch from '../Forms/FormMainSearch/';

class ContentHeader extends Component {
  render() {
    const { user } = this.props;
    return (
      <div className="row content-header flexbox">
        <HelloHeader name={user.first_name} />
        <FormMainSearch onSubmit={() => {}} />
      </div>
    );
  }
}

ContentHeader.propTypes = {
  user: PropTypes.object,
};

export default ContentHeader;
