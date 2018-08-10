import React from 'react';
import NavHeader from '../components/nav-header/NavHeader';
import PageHeader from '../components/page-header/PageHeader';
import TimeEntryForm from '../components/time-entry-form/TimeEntryForm';

export default () => (
  <React.Fragment>
    <NavHeader title="Team Awesome" />
    <PageHeader
      pageTitle="Timesheets"
      count={12}
      unit="entries"
    />
    <TimeEntryForm />
  </React.Fragment>
);
