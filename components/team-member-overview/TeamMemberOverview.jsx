import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import TeamMemberItem from '../team-member-item/TeamMemberItem';

import './team-member-overview.scss';

class TeamMemberOverview extends React.Component {
  static propTypes = {
    onRequestTeamMembers: PropTypes.func.isRequired,
    onSaveTeamMember: PropTypes.func.isRequired,
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
    const { teamMembers } = this.props;

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

          <select className="input-field team-member-overview__filter" name="sort" id="select">
            <option value="default">Sort by:</option>
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
