import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import TellentsListItem from './TellentsListItem';
import uuid from 'uuid/v4';
import EmptyTellents from '../../assets/images/tallents@2x.png';

export const TellentsList = ({ users }) => (
  <div className="col-xs-12">
    {users ? (
      <Fragment>
        <div className="job-boxes-wrapper job-boxes-wrapper--talents flexbox justify-space-between flex-wrap">
          {users.map(item => (
            <TellentsListItem key={uuid()} item={item} />
          ))}
        </div>
        <div className="job-boxes-footer">
          <button className="btn btn-bg-transparent blue-color btn-bold">Load more</button>
        </div>
      </Fragment>
    ) : (
      <div className="noresults noresults--tallents">
        <img src={EmptyTellents} alt="Empty Tellents" />
        <h2 className="blue-color">We didn’t find anybody</h2>
        <p>Please try modifying your search to get more results.</p>
      </div>
    )}
  </div>
);

TellentsList.propTypes = {
  users: PropTypes.array,
};

export default TellentsList;
