import React from 'react';
// import PropTypes from 'prop-types';

import './team-member-detail.scss';

class TimeEntryDetail extends React.Component { //eslint-disable-line
  static propTypes = {

  }

  render() {
    return (
      <div className="team-member__row">
        <div className="team-member-primary-wrapper">
          <img className="team-member__avatar" src="../../static/images/avatar-naomi.jpg" alt="" />
          <div className="team-member__personalia">
            <p className="team-member__text--primary">Naomi Zuiverloon</p>
            <p className="team-member__text--secondary">UX Designer</p>
          </div>
        </div>

        <div className="team-member-secondary-wrapper">
          <div className="team-member__employee-info">
            <p className="team-member__text--primary">HUM_001</p>
            <p className="team-member__text--secondary">Employee number</p>
          </div>
          <div className="team-member__employee-info">
            <p className="team-member__text--primary">Hike One</p>
            <p className="team-member__text--secondary">Current employer</p>
          </div>
          <div className="team-member__employee-info">
            <p className="team-member__text--primary">February 2018</p>
            <p className="team-member__text--secondary">Starting date</p>
          </div>
        </div>
        <button
          className="btn caret-btn"
          name="button"
          type="button"
        >
          <img
            alt=""
            src="../../static/icons/arrow-down-2.svg"
          />
        </button>
      </div>
    );
  }
}


export default TimeEntryDetail;
