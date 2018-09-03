import React from 'react';

import './team-member-detail.scss';

class TimeEntryDetail extends React.Component {
  static propTypes = {
  }

  render() {
    return (
      <div className="team-member__row">
        {/* MAIN WRAPPER */}
        <div className="team-member-main-wrapper">
          {/* PERSONALIA */}
          <div className="team-member-primary-wrapper">
            <img
              alt=""
              className="team-member__avatar"
              src="../../static/images/avatar-naomi.jpg"
            />
            <div className="team-member__personalia">
              <p className="team-member__text--primary">
                Naomi Zuiverloon
              </p>
              <p className="team-member__text--secondary">
                Front-end Developer
              </p>
            </div>
          </div>

          {/* WORK INFO */}
          <div className="team-member-secondary-wrapper">
            <div className="team-member__employer-info">
              <p className="team-member__text--primary">
                HUM_001
              </p>
              <p className="team-member__text--secondary">
                Employee number
              </p>
            </div>
            <div className="team-member__employer-info">
              <p className="team-member__text--primary">
                Hike One
              </p>
              <p className="team-member__text--secondary">
                Current employer
              </p>
            </div>
            <div className="team-member__employer-info">
              <p className="team-member__text--primary">
                February 2018
              </p>
              <p className="team-member__text--secondary">
                Starting date
              </p>
            </div>
          </div>

          {/* CARET */}
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

        {/* EXPANDABLE WRAPPER */}
        <div className="team-member-detail-wrapper--visible">
          <div className="team-member__detail-title">
            Detailed information about Naomi
          </div>
          <div className="team-member__employer-info">
            <p className="team-member__text--primary">
              Hike One
            </p>
            <p className="team-member__text--secondary">
              Current employer
            </p>
          </div>
          <div className="team-member__employer-info">
            <p className="team-member__text--primary">
              February 2018
            </p>
            <p className="team-member__text--secondary">
              Starting date
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default TimeEntryDetail;
