import React from 'react';
import NavHeaderContainer from '../components/nav-header/NavHeaderContainer';
import TeamMemberOverviewContainer from '../components/team-member-overview/TeamMemberOverviewContainer';

export default () => (
  <React.Fragment>
    <NavHeaderContainer siteName="Team Awesome" />
    <TeamMemberOverviewContainer />
  </React.Fragment>
);
