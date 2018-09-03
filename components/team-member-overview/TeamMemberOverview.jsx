import React from 'react';
import TeamMemberDetail from '../team-member-detail/TeamMemberDetail';

import './team-member-overview.scss';

class TeamMemberOverview extends React.Component {
  static propTypes = {
  }

  render() {
    return (
      <section className="team-member-overview row">
        <div className="team-member__title-wrapper">
          <h2 className="team-member__title">
            All Humanoids
          </h2>

          <button
            className="btn team-member__button-new"
            onClick={this.handleFormVisibility}
            type="button"
          >
            <svg className="team-member__icon-plus" />
            New Humanoid
          </button>

          <div className="team-member__select-container">
            <select className="input-field team-member__select" name="sort" id="select">
              <option value="default">Sort by:</option>
              <option value="ascending">A-Z (asc)</option>
              <option value="descending">Z-A (desc)</option>
            </select>
          </div>
        </div>

        <TeamMemberDetail />
      </section>
    );
  }
}

export default TeamMemberOverview;
