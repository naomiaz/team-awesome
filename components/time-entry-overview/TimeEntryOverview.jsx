import React from 'react';

import TimeEntryForm from '../time-entry-form/TimeEntryForm';
import TimeEntryDetail from '../time-entry-detail/TimeEntryDetail';
import timeEntryData from './mock-database.json';

import './time-entry-overview.scss';

class TimeEntryOverview extends React.Component {
  state = {
    timeEntries: timeEntryData
  }

  handleEntrySubmit = (newTimeEntry) => {
    this.setState((prevState) => ({
      ...prevState,
      timeEntries: [
        newTimeEntry,
        ...prevState.timeEntries
      ]
    }));
  };

  checkIfToday = (dateOfEntry) => {
    if (new Date(dateOfEntry).toLocaleDateString() === new Date().toLocaleDateString()) {
      return '(Today)';
    } if (new Date(dateOfEntry).toLocaleDateString()
      === new Date(Date.now() - 86400000).toLocaleDateString()) {
      return '(Yesterday)';
    }
    return '';
  };

  render() {
    const { timeEntries } = this.state;
    const dateOptions = { weekday: 'long', day: 'numeric', month: '2-digit' };
    return (
      <React.Fragment>
        <TimeEntryForm handleEntrySubmit={this.handleEntrySubmit} />

        <section className="row time-entry-overview">
          {timeEntries.map((currentTimeEntry, index, array) => (
          // if (index === 0 ) { date + component } ------->> 0 is falsy
          // if (currentTimeEntry.date !== previousTimeEntry.date) { date + component }
          // if (currentTimeEntry.date === previousTimeEntry.date) { component }
            <React.Fragment key={currentTimeEntry.timeFrom}>
              {(!index || (currentTimeEntry.date !== array[index - 1].date)) && (
                <h3 className="text--secondary time-entry__date">
                  { `${new Date(currentTimeEntry.date).toLocaleDateString('en-NL', dateOptions)
                    .replace('/', '-')
                    .replace(',', '')}
                  ${this.checkIfToday(currentTimeEntry.date)}` }
                </h3>
              )}
              <TimeEntryDetail {...currentTimeEntry} />
            </React.Fragment>
          ))}
        </section>
      </React.Fragment>
    );
  }
}

export default TimeEntryOverview;
