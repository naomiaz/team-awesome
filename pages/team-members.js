import React from 'react';
import NavHeader from '../components/nav-header/NavHeader';
import TeamMemberOverviewContainer from '../components/team-member-overview/TeamMemberOverviewContainer';

export default () => (
  <React.Fragment>
    <NavHeader siteName="Team Awesome" />
    <TeamMemberOverviewContainer />
  </React.Fragment>
);
