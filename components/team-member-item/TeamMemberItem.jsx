import React from 'react';
import PropTypes from 'prop-types';

import './team-member-item.scss';

class TeamMemberItem extends React.Component {
  static propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    employeeNumber: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    jobTitle: PropTypes.string.isRequired,
    currentClient: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired
  }

  state = {
    isDetailWrapperVisible: false
  }

  toggleDetailWrapper = () => {
    this.setState((prevState) => ({
      isDetailWrapperVisible: !prevState.isDetailWrapperVisible
    }));
  };

  render() {
    const { isDetailWrapperVisible } = this.state;
    const {
      firstName, lastName, employeeNumber, id, avatar, jobTitle, currentClient, startDate
    } = this.props;
    return (
      <div className="team-member-item" id={id}>
        {/* MAIN WRAPPER */}
        <div className="team-member-item__main-wrapper">

          {/* PERSONALIA */}
          <div className="team-member-item__primary-wrapper">
            <img
              alt={`${firstName} ${lastName}`}
              className="team-member-item__avatar"
              src={`/static/images/${avatar}`}
            />
            <div className="team-member-item__personalia">
              <p className="team-member-item__text--primary">
                {`${firstName} ${lastName}`}
              </p>
              <p className="team-member-item__text--secondary">
                {jobTitle}
              </p>
            </div>
          </div>

          {/* WORK INFO */}
          <div className="team-member-item__secondary-wrapper">
            <div className="team-member-item__client-info">
              <p className="team-member-item__text--primary">
                {employeeNumber}
              </p>
              <p className="team-member-item__text--secondary">
                Employee number
              </p>
            </div>
            <div className="team-member-item__client-info">
              <p className="team-member-item__text--primary">
                {currentClient}
              </p>
              <p className="team-member-item__text--secondary">
                Current client
              </p>
            </div>
            <div className="team-member-item__client-info">
              <p className="team-member-item__text--primary">
                {startDate}
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
            {`Detailed information about ${firstName}`}
          </div>
          <div className="team-member-item__detail-content">
            <div className="team-member-item__detail-client-info">
              <p className="team-member-item__text--primary">
                {currentClient}
              </p>
              <p className="team-member-item__text--secondary">
                Current client
              </p>
            </div>
            <div className="team-member-item__detail-client-info">
              <p className="team-member-item__text--primary">
                {startDate}
              </p>
              <p className="team-member-item__text--secondary">
                Starting date
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TeamMemberItem;
