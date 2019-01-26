import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import TellentsListItem from './TellentsListItem';
import uuid from 'uuid/v4';
import EmptyTellents from '../../assets/images/tallents@2x.png';

class TellentsList extends Component {
  state = {
    isDropDownOpened: null,
  };

  onOpenDropDown = id => {
    this.setState({ isDropDownOpened: id });
  };

  onCloseDropDown = () => {
    this.setState({ isDropDownOpened: null });
  };

  render() {
    const { isDropDownOpened } = this.state;
    const { users, handleLoadMoreTellents } = this.props;
    return (
      <div className="col-xs-12">
        {users ? (
          <Fragment>
            <div className="job-boxes-wrapper job-boxes-wrapper--talents flexbox justify-space-between flex-wrap">
              {users.map((item, index) => {
                const ev = index % 2;
                const itemId = item.id;
                return (
                  <TellentsListItem
                    key={uuid()}
                    item={item}
                    ev={ev !== 0}
                    index={index}
                    isDropDownOpened={itemId === isDropDownOpened}
                    onOpenDropDown={this.onOpenDropDown}
                    onCloseDropDown={this.onCloseDropDown}
                  />
                );
              })}
            </div>
            <div className="job-boxes-footer">
              <button className="btn btn-bg-transparent blue-color btn-bold" onClick={handleLoadMoreTellents}>
                Load more
              </button>
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
  }
}

TellentsList.propTypes = {
  users: PropTypes.array,
  handleLoadMoreTellents: PropTypes.func,
};

export default TellentsList;
