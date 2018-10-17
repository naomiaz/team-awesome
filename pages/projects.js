import React from 'react';
import NavHeader from '../components/nav-header/NavHeader';
import PageHeader from '../shared/components/page-header/PageHeader';

export default () => (
  <React.Fragment>
    <NavHeader siteName="Team Awesome" />
    <PageHeader
      pageTitle="Projects"
      unitCount={0}
      unitPlural="Projects"
      unitSingular="Project"
    />
  </React.Fragment>
);
