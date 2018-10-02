import React from 'react';
import NavHeaderContainer from '../components/nav-header/NavHeaderContainer';
import TeamMemberFormContainer from '../components/team-member-form/TeamMemberFormContainer';

export default () => (
  <React.Fragment>
    <NavHeaderContainer siteName="Team Awesome" />
    <TeamMemberFormContainer />
  </React.Fragment>
);
