import React from 'react';
import PropTypes from 'prop-types';
import { convertIsoToMonthYear } from '../../services/date-time/date-time';

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
        <div
          className="btn team-member-item__header"
          onClick={this.toggleDetailWrapper}
          onKeyDown={this.toggleDetailWrapper}
          role="button"
          tabIndex="0"
        >

          {/* PERSONALIA */}
          <div className="team-member-item__primary-wrapper">
            <img
              alt={`${firstName} ${lastName}`}
              className="team-member-item__avatar"
              src={`/static/images/${avatar}`}
            />
            <div className="team-member-item__personalia">
              <span className="team-member-item__text--primary">
                {`${firstName} ${lastName}`}
              </span>
              <span className="team-member-item__text--secondary">
                {jobTitle}
              </span>
            </div>
          </div>

          {/* WORK INFO */}
          <ul className="team-member-item__secondary-wrapper">
            <li className="team-member-item__client-info">
              <span className="team-member-item__text--primary">
                {employeeNumber}
              </span>
              <span className="team-member-item__text--secondary">
                Employee number
              </span>
            </li>
            <li className="team-member-item__client-info">
              <span className="team-member-item__text--primary">
                {currentClient}
              </span>
              <span className="team-member-item__text--secondary">
                Current client
              </span>
            </li>
            <li className="team-member-item__client-info">
              <span className="team-member-item__text--primary">
                {convertIsoToMonthYear(startDate)}
              </span>
              <span className="team-member-item__text--secondary">
                Starting date
              </span>
            </li>
          </ul>

          {/* CARET */}
          <div className="team-member-item__button-caret">
            <svg className={`team-member-item__icon-caret team-member-item__icon-caret${isDetailWrapperVisible ? '--up' : '--down'}`} />
          </div>
        </div>

        {/* EXPANDABLE WRAPPER */}
        <div className={`team-member-item__content${isDetailWrapperVisible ? '--visible' : '--hidden'}`}>
          <div className="team-member-item__content-title">
            {`Detailed information about ${firstName}`}
          </div>
          <ul className="team-member-item__content-wrapper">
            <li className="team-member-item__content-client-info">
              <span className="team-member-item__text--primary">
                {currentClient}
              </span>
              <span className="team-member-item__text--secondary">
                Current client
              </span>
            </li>
            <li className="team-member-item__detail-client-info">
              <span className="team-member-item__text--primary">
                {convertIsoToMonthYear(startDate)}
              </span>
              <span className="team-member-item__text--secondary">
                Starting date
              </span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default TeamMemberItem;
