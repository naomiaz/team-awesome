import React from 'react';
import PropTypes from 'prop-types';
import TimeEntryForm from '../time-entry-form/TimeEntryForm';
import TimeEntryDetail from '../time-entry-detail/TimeEntryDetail';
import { timeEntriesGet, timeEntriesPost, timeEntriesDelete } from '../../services/time-entries-api/time-entries-api';
import { getRelativeDay } from '../../services/date-time/date-time';

import './time-entry-overview.scss';

class TimeEntryOverview extends React.Component {
  static propTypes = {
    requestTimeEntries: PropTypes.func.isRequired,
    requestTimeEntriesSuccess: PropTypes.func.isRequired,
    timeEntries: PropTypes.arrayOf(
      PropTypes.shape({
        activity: PropTypes.string.isRequired,
        client: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        timeFrom: PropTypes.string.isRequired,
        timeTo: PropTypes.string.isRequired
      })
    ).isRequired
  }

  componentDidMount() {
    const { requestTimeEntries, requestTimeEntriesSuccess } = this.props;
    requestTimeEntries();
    timeEntriesGet().then((timeEntries) => requestTimeEntriesSuccess(timeEntries));
    // timeEntriesGet().then((timeEntries) => this.setState({ timeEntries }));
  }

  handleEntrySubmit = (newTimeEntry) => (
    timeEntriesPost(newTimeEntry).then((json) => {
      this.setState((prevState) => ({
        timeEntries: [
          json,
          ...prevState.timeEntries
        ]
      }));
    })
  )

  handleEntryDelete = (id) => (
    timeEntriesDelete(id).then(() => {
      this.setState((prevState) => ({
        timeEntries: [
          ...prevState.timeEntries.filter((entry) => entry.id !== id)
        ]
      }));
    })
  );

  render() {
    const { timeEntries } = this.props;
    const dateOptions = { weekday: 'long', day: 'numeric', month: '2-digit' };
    return (
      <React.Fragment>
        <TimeEntryForm
          handleEntrySubmit={this.handleEntrySubmit}
        />

        <section className="row time-entry-overview">
          {timeEntries.map((currentTimeEntry, index, array) => (
          // if (index === 0 ) { date + component } ------->> 0 is falsy
          // if (currentTimeEntry.date !== previousTimeEntry.date) { date + component }
          // if (currentTimeEntry.date === previousTimeEntry.date) { component }
            <React.Fragment key={currentTimeEntry.id}>
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
                handleEntryDelete={this.handleEntryDelete}
                id={currentTimeEntry.id}
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
