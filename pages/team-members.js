import React from 'react';
import NavHeaderContainer from '../components/nav-header/NavHeaderContainer';
import PageHeader from '../components/page-header/PageHeader';
import TeamMemberOverviewContainer from '../components/team-member-overview/TeamMemberOverviewContainer';

export default () => (
  <React.Fragment>
    <NavHeaderContainer siteName="Team Awesome" />
    <PageHeader
      pageTitle="Team members"
      unitCount={22}
      unit="Humanoids"
    />
    <TeamMemberOverviewContainer />
  </React.Fragment>
);
