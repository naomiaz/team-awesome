import React from 'react';
import Link from 'next/link';
import TeamMemberItem from '../team-member-item/TeamMemberItem';

import './team-member-overview.scss';

class TeamMemberOverview extends React.Component {
  static propTypes = {
  }

  render() {
    return (
      <section className="team-member-overview row">
        <div className="team-member-overview__title-wrapper">
          <h2 className="team-member-overview__title">
            All Humanoids
          </h2>

          <Link href="/add-new-team-member">
            <a>
              <button
                className="btn team-member-overview__button-new"
                onClick={this.handleFormVisibility}
                type="button"
              >
                <svg className="team-member-overview__icon-plus" />
                New Humanoid
              </button>
            </a>
          </Link>

          <select className="input-field team-member-overview__filter" name="sort" id="select">
            <option value="default">Sort by:</option>
            <option value="ascending">A-Z (asc)</option>
            <option value="descending">Z-A (desc)</option>
          </select>
        </div>

        <TeamMemberItem />
        <TeamMemberItem />
      </section>
    );
  }
}

export default TeamMemberOverview;
