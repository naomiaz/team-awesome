import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import SelectBox from '../../services/components/select-box/SelectBox';
import TeamMemberItem from '../team-member-item/TeamMemberItem';

import './team-member-overview.scss';

class TeamMemberOverview extends React.Component {
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

  componentDidMount() {
    const { onRequestTeamMembers } = this.props;
    onRequestTeamMembers();
  }

  render() {
    const {
      teamMembers, onSortTeamMembersBy, onSortTeamMembersDirection, sortBy, sortDirection
    } = this.props;

    return (
      <section className="team-member-overview">
        <div className="team-member-overview__header">
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

          <SelectBox
            className="team-member-overview__filter"
            selectedValue={sortBy}
            name="sortBy"
            onChange={(event) => onSortTeamMembersBy(event.target.value)}
            options={[
              { title: 'Sort by:', value: '' },
              { title: 'Employee #', value: 'employeeNumber' },
              { title: 'Job Title', value: 'jobTitle' },
              { title: 'First Name', value: 'firstName' },
              { title: 'Last Name', value: 'lastName' }
            ]}
          />

          <SelectBox
            className="team-member-overview__filter"
            selectedValue={sortDirection}
            name="sortDirection"
            onChange={(event) => onSortTeamMembersDirection(event.target.value)}
            options={[
              { title: 'A-Z (asc):', value: 'ascending' },
              { title: 'Z-A (desc)', value: 'descending' }
            ]}
          />
        </div>

        <ul>
          {teamMembers && teamMembers.map((currentMember) => (
            <li
              className="team-member-item"
              id={currentMember.id}
              key={currentMember.id}
            >
              <TeamMemberItem {...currentMember} />
            </li>
          ))}
        </ul>

      </section>
    );
  }
}

export default TeamMemberOverview;
