import React from 'react';
import TimeEntryDetail from './TimeEntryDetail';
import data from './mock-database.json';

import './TimeEntryOverview.scss';

const TimeEntryOverview = () => (
  <section className="row time-entry-overview">
    <TimeEntryDetail data={data} />
  </section>
);

export default TimeEntryOverview;
