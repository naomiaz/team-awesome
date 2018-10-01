import React from 'react';
import NavHeaderContainer from '../components/nav-header/NavHeaderContainer';
import PageHeader from '../shared/components/page-header/PageHeader';

export default () => (
  <React.Fragment>
    <NavHeaderContainer siteName="Team Awesome" />
    <PageHeader
      pageTitle="Projects"
      unitCount={0}
      unitPlural="Projects"
      unitSingular="Project"
    />
  </React.Fragment>
);
