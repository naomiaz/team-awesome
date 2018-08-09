import React from 'react';
import NavHeader from '../components/NavHeader/NavHeader';
import PageHeader from '../components/PageHeader/PageHeader';
import TimeEntryForm from '../components/TimeEntryForm/TimeEntryForm';

export default () => (
  <div>
    <NavHeader title="Team Awesome" />
    <PageHeader pageTitle="Timesheets" count="12" unit="entries" />
    <TimeEntryForm />
  </div>
);
