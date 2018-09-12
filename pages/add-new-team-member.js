import React from 'react';
import NavHeaderContainer from '../components/nav-header/NavHeaderContainer';
import PageHeader from '../components/page-header/PageHeader';
import TeamMemberFormContainer from '../components/team-member-form/TeamMemberFormContainer';

export default () => (
  <React.Fragment>
    <NavHeaderContainer siteName="Team Awesome" />
    <PageHeader
      pageTitle="Team members"
      unitCount={22}
      unit="Humanoids"
    />
    <TeamMemberFormContainer />
  </React.Fragment>
);
