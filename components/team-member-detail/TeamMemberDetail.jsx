import React from 'react';

import './team-member-detail.scss';

class TimeEntryDetail extends React.Component {
  static propTypes = {
  }

  state = {
    isDetailWrapperVisible: false
  }

  toggleDetailWrapper = () => {
    this.setState((prevState) => ({
      ...prevState,
      isDetailWrapperVisible: !prevState.isDetailWrapperVisible
    }));
  };

  render() {
    const { isDetailWrapperVisible } = this.state;
    return (
      <div className="team-member-item">
        {/* MAIN WRAPPER */}
        <div className="team-member-item__main-wrapper">
          {/* PERSONALIA */}
          <div className="team-member-item__primary-wrapper">
            <img
              alt=""
              className="team-member-item__avatar"
              src="../../static/images/avatar-naomi.jpg"
            />
            <div className="team-member-item__personalia">
              <p className="team-member-item__text--primary">
                Naomi Zuiverloon
              </p>
              <p className="team-member-item__text--secondary">
                Front-end Developer
              </p>
            </div>
          </div>

          {/* WORK INFO */}
          <div className="team-member-item__secondary-wrapper">
            <div className="team-member-item__employer-info">
              <p className="team-member-item__text--primary">
                HUM_001
              </p>
              <p className="team-member-item__text--secondary">
                Employee number
              </p>
            </div>
            <div className="team-member-item__employer-info">
              <p className="team-member-item__text--primary">
                Hike One
              </p>
              <p className="team-member-item__text--secondary">
                Current employer
              </p>
            </div>
            <div className="team-member-item__employer-info">
              <p className="team-member-item__text--primary">
                February 2018
              </p>
              <p className="team-member-item__text--secondary">
                Starting date
              </p>
            </div>
          </div>

          {/* CARET */}
          <button
            className="btn caret-btn"
            name="button"
            onClick={this.toggleDetailWrapper}
            type="button"
          >
            <svg className={`team-member-item__icon-caret team-member-item__icon-caret${isDetailWrapperVisible ? '--up' : '--down'}`} />
          </button>
        </div>

        {/* EXPANDABLE WRAPPER */}
        <div className={`team-member-item__detail-wrapper${isDetailWrapperVisible ? '--visible' : '--hidden'}`}>
          <div className="team-member-item__detail-title">
            Detailed information about Naomi
          </div>
          <div className="team-member-item__employer-info">
            <p className="team-member-item__text--primary">
              Hike One
            </p>
            <p className="team-member-item__text--secondary">
              Current employer
            </p>
          </div>
          <div className="team-member-item__employer-info">
            <p className="team-member-item__text--primary">
              February 2018
            </p>
            <p className="team-member-item__text--secondary">
              Starting date
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default TimeEntryDetail;
