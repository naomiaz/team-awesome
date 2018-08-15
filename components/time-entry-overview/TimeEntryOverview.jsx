import React from 'react';
import TimeEntryForm from '../time-entry-form/TimeEntryForm';
import TimeEntryDetail from '../time-entry-detail/TimeEntryDetail';
import data from './mock-database.json';

import './time-entry-overview.scss';

const generateTimesheet = data.map((currentTimeEntry, index, array) => (
  // if (index === 0 ) { date + component } ------->> 0 is falsy
  // if (currentTimeEntry.date !== previousTimeEntry.date) { date + component }
  // if (currentTimeEntry.date === previousTimeEntry.date) { component }
  <React.Fragment key={currentTimeEntry.projectId}>

    {(!index || (currentTimeEntry.projectDate !== array[index - 1].projectDate)) && (
    <h3 className="text--secondary time-entry__date">
      { currentTimeEntry.projectDate }
    </h3>
    )}
    <TimeEntryDetail {...currentTimeEntry} />

  </React.Fragment>
));


const TimeEntryOverview = () => (
  <React.Fragment>
    <TimeEntryForm />

    <section className="row time-entry-overview">
      {generateTimesheet}
    </section>
  </React.Fragment>
);

export default TimeEntryOverview;
