import React from 'react';
import NavHeaderContainer from '../components/nav-header/NavHeaderContainer';
import PageHeader from '../components/page-header/PageHeader';
import TimeEntryOverview from '../components/time-entry-overview';

export default () => (
  <React.Fragment>
    <NavHeaderContainer siteName="Team Awesome" />
    <PageHeader
      pageTitle="Timesheets"
      unitCount={12}
      unit="Entries"
    />
    <TimeEntryOverview />
  </React.Fragment>
);
