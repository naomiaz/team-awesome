import React from 'react';
import NavHeaderContainer from '../components/nav-header/NavHeaderContainer';
import PageHeaderContainer from '../components/page-header/PageHeaderContainer';
import TimeEntryOverview from '../components/time-entry-overview';

export default () => (
  <React.Fragment>
    <NavHeaderContainer siteName="Team Awesome" />
    <PageHeaderContainer
      pageTitle="Timesheets"
      unitCount={12}
      unit="Entries"
    />
    <TimeEntryOverview />
  </React.Fragment>
);
