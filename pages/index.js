import React from 'react';
import NavHeaderContainer from '../components/nav-header/NavHeaderContainer';
import TimeEntryPageHeaderContainer from '../components/time-entry-page-header/TimeEntryPageHeaderContainer';
import TimeEntryOverview from '../components/time-entry-overview';

export default () => (
  <React.Fragment>
    <NavHeaderContainer siteName="Team Awesome" />
    <TimeEntryPageHeaderContainer
      pageTitle="Timesheets"
      unitCount={12}
      unit="Entries"
    />
    <TimeEntryOverview />
  </React.Fragment>
);
