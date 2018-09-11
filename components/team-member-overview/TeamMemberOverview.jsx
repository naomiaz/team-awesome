import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import TeamMemberItem from '../team-member-item/TeamMemberItem';

import './team-member-overview.scss';

class TeamMemberOverview extends React.Component {
  static sortDefaultValues = {
    sort: {
      sortBy: '',
      sortDirection: 'ascending'
    }
  };

  static propTypes = {
    onRequestTeamMembers: PropTypes.func.isRequired,
    onSaveTeamMember: PropTypes.func.isRequired,
    onSortTeamMembersBy: PropTypes.func.isRequired,
    onSortTeamMembersDirection: PropTypes.func.isRequired,
    sortBy: PropTypes.string.isRequired,
    sortDirection: PropTypes.string.isRequired,
    teamMembers: PropTypes.arrayOf(
      PropTypes.shape({
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        employeeNumber: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        email: PropTypes.string.isRequired,
        address: PropTypes.string.isRequired,
        zip: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        biography: PropTypes.string.isRequired,
        socialsTwitter: PropTypes.string.isRequired,
        socialsFacebook: PropTypes.string.isRequired,
        jobTitle: PropTypes.string.isRequired,
        currentClient: PropTypes.string.isRequired,
        startDate: PropTypes.string.isRequired
      })
    ).isRequired
  }

  state = {
    sortValues: TeamMemberOverview.sortDefaultValues.sort
  }

  componentDidMount() {
    const { onRequestTeamMembers } = this.props;
    onRequestTeamMembers();
  }

  handleChange = ({ target }) => {
    const { onSortTeamMembers } = this.props;
    const { sortValues } = this.state;
    this.setState((prevState) => ({
      sortValues: {
        ...prevState.sortValues,
        [target.name]: target.value
      }
    }), onSortTeamMembers(sortValues));
  }

  render() {
    const { sortValues } = this.state;
    const { sortBy, sortDirection } = this.props;
    const { teamMembers, onSortTeamMembersBy, onSortTeamMembersDirection } = this.props;

    return (
      <section className="team-member-overview row">
        <div className="team-member-overview__title-wrapper">
          <h2 className="team-member-overview__title">
            All Humanoids
          </h2>

          <Link href="/add-new-team-member">
            <button
              className="btn team-member-overview__button-new render-whitespace--left"
              type="button"
            >
              <svg className="team-member-overview__icon-plus" />
              New Humanoid
            </button>
          </Link>

          <select
            className="input-field team-member-overview__filter"
            name="sortBy"
            value={sortBy}
            id="select"
            onChange={({ target }) => onSortTeamMembersBy(target.value)}
          >
            <option value="">Sort by:</option>
            <option value="employeeNumber">Employee #</option>
            <option value="jobTitle">Job Title</option>
            <option value="lastName">Last Name</option>
          </select>

          <select
            className="input-field team-member-overview__filter"
            name="sortDirection"
            onChange={({ target }) => onSortTeamMembersDirection(target.value)}
            value={sortDirection}
            id="select"
          >
            <option value="ascending">A-Z (asc)</option>
            <option value="descending">Z-A (desc)</option>
          </select>
        </div>

        {teamMembers.map((currentMember, index) => (
          <TeamMemberItem
            key={currentMember.id}
            index={index}
            {...currentMember}
          />
        ))}

      </section>
    );
  }
}

export default TeamMemberOverview;
