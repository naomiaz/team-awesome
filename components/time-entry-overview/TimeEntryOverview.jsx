import React from 'react';

import TimeEntryForm from '../time-entry-form/TimeEntryForm';
import TimeEntryDetail from '../time-entry-detail/TimeEntryDetail';
import { timeEntriesGet, timeEntriesPost } from '../../services/time-entries-api/time-entries-api';
import { getRelativeDay } from '../../services/date-time/date-time';

import './time-entry-overview.scss';

class TimeEntryOverview extends React.Component {
  state = {
    timeEntries: []
  }

  componentDidMount() {
    timeEntriesGet().then((timeEntries) => this.setState({ timeEntries }));
  }

  handleEntrySubmit = (newTimeEntry) => {
    timeEntriesPost(newTimeEntry)
      .then(() => {
        timeEntriesGet()
          .then((timeEntries) => this.setState({ timeEntries }));
      });
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
                  ${getRelativeDay(currentTimeEntry.date)}` }
                </h3>
              )}
              <TimeEntryDetail
                client={currentTimeEntry.client}
                timeFrom={currentTimeEntry.timeFrom}
                timeTo={currentTimeEntry.timeTo}
              />
            </React.Fragment>
          ))}
        </section>
      </React.Fragment>
    );
  }
}

export default TimeEntryOverview;
