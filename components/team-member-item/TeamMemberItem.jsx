import React from 'react';
import PropTypes from 'prop-types';

import { convertIsoToMonthYear } from '../../services/date-time/date-time';

import './team-member-item.scss';

class TeamMemberItem extends React.Component {
  static propTypes = {
    avatar: PropTypes.string.isRequired,
    biography: PropTypes.string.isRequired,
    currentClient: PropTypes.string.isRequired,
    employeeNumber: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    jobTitle: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
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
      firstName, lastName, employeeNumber, avatar, biography, jobTitle, currentClient, startDate
    } = this.props;
    return (
      <React.Fragment>
        <div
          className="btn team-member-item__body"
          onClick={this.toggleDetailWrapper}
          onKeyDown={this.toggleDetailWrapper}
          role="button"
          tabIndex="0"
        >

          <div className="team-member-item__personalia">
            <img
              alt={`${firstName} ${lastName}`}
              className="team-member-item__avatar"
              src={`/static/images/${avatar}`}
            />
            <div className="
              team-member-item__personalia-data
              team-member-item__text-block
            "
            >
              <span className="team-member-item__text--primary">
                {`${firstName} ${lastName}`}
              </span>
              <span className="team-member-item__text--secondary">
                {jobTitle}
              </span>
            </div>
          </div>

          <ul className="team-member-item__client-info">
            <li className="team-member-item__text-block">
              <span className="team-member-item__text--primary">
                {employeeNumber}
              </span>
              <span className="team-member-item__text--secondary">
                Employee number
              </span>
            </li>
            <li className="team-member-item__text-block">
              <span className="team-member-item__text--primary">
                {currentClient}
              </span>
              <span className="team-member-item__text--secondary">
                Current client
              </span>
            </li>
            <li className="team-member-item__text-block">
              <span className="team-member-item__text--primary">
                {convertIsoToMonthYear(startDate)}
              </span>
              <span className="team-member-item__text--secondary">
                Starting date
              </span>
            </li>
          </ul>

          <div className={`
            team-member-item__button-caret
            team-member-item__button-caret${isDetailWrapperVisible ? '--up' : '--down'}`}
          />
        </div>

        <div className={`team-member-item__body-expandable${isDetailWrapperVisible ? '--visible' : '--hidden'}`}>
          <div className="team-member-item__subtitle">
            {`Detailed information about ${firstName}`}
          </div>
          <ul className="
            team-member-item__client-info
            team-member-item__client-info--expandable"
          >
            <li className="
              team-member-item__text-block
              team-member-item__text-block--expandable"
            >
              <span className="team-member-item__text--primary">
                {currentClient}
              </span>
              <span className="team-member-item__text--secondary">
                Current client
              </span>
            </li>
            <li className="
              team-member-item__text-block
              team-member-item__text-block--expandable"
            >
              <span className="team-member-item__text--primary">
                {convertIsoToMonthYear(startDate)}
              </span>
              <span className="team-member-item__text--secondary">
                Starting date
              </span>
            </li>
          </ul>

          {biography && (
            <React.Fragment>
              <div className="team-member-item__divider" />
              <blockquote className="
                team-member-item__blockquote
                team-member-item__text--primary"
              >
                {biography}
              </blockquote>
            </React.Fragment>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default TeamMemberItem;
