import React from 'react';
import NavHeader from '../components/nav-header/NavHeader';
import PageHeader from '../shared/components/page-header/PageHeader';

export default () => (
  <React.Fragment>
    <NavHeader siteName="Team Awesome" />
    <PageHeader
      pageTitle="Documents"
      unitCount={0}
      unitPlural="Documents"
      unitSingular="Document"
    />
  </React.Fragment>
);
