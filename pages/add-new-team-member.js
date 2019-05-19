import React from 'react';
import NavHeader from '../components/nav-header/NavHeader';
import TeamMemberFormContainer from '../components/team-member-form/TeamMemberFormContainer';

export default () => (
  <React.Fragment>
    <NavHeader siteName="Team Awesome" />
    <TeamMemberFormContainer />
  </React.Fragment>
);
