import React from 'react';
import NavHeader from '../components/nav-header/NavHeader';
import PageHeader from '../components/page-header/PageHeader';
import TimeEntryOverview from '../components/time-entry-overview';

export default () => (
  <React.Fragment>
    <NavHeader siteName="Team Awesome" />
    <PageHeader
      pageTitle="Timesheets"
      unitCount={12}
      unit="entries"
    />
    <TimeEntryOverview />
  </React.Fragment>
);
