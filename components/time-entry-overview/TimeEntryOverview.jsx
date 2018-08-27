import React from 'react';
import PropTypes from 'prop-types';
import TimeEntryForm from '../time-entry-form/TimeEntryForm';
import TimeEntryDetail from '../time-entry-detail/TimeEntryDetail';
import { getTimeEntries, postTimeEntry, deleteTimeEntry } from '../../services/time-entries-api/time-entries-api';
import { getRelativeDay, calculateDurationPerDay } from '../../services/date-time/date-time';

import './time-entry-overview.scss';

class TimeEntryOverview extends React.Component {
  static propTypes = {
    isFormSaving: PropTypes.bool.isRequired,
    isFormVisible: PropTypes.bool.isRequired,
    onDeleteTimeEntry: PropTypes.func.isRequired,
    onDeleteTimeEntrySuccess: PropTypes.func.isRequired,
    onRequestTimeEntries: PropTypes.func.isRequired,
    onRequestTimeEntriesSuccess: PropTypes.func.isRequired,
    onSaveTimeEntry: PropTypes.func.isRequired,
    onSaveTimeEntrySuccess: PropTypes.func.isRequired,
    onToggleFormVisibility: PropTypes.func.isRequired,
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
    const { onRequestTimeEntries, onRequestTimeEntriesSuccess } = this.props;
    onRequestTimeEntries();
    getTimeEntries().then((timeEntries) => onRequestTimeEntriesSuccess(timeEntries));
  }

  onEntrySubmit = (newTimeEntry) => {
    const { onSaveTimeEntry, onSaveTimeEntrySuccess } = this.props;
    onSaveTimeEntry();
    postTimeEntry(newTimeEntry).then(onSaveTimeEntrySuccess);
  };

  onEntryDelete = (id) => {
    const { onDeleteTimeEntry, onDeleteTimeEntrySuccess } = this.props;
    onDeleteTimeEntry();
    deleteTimeEntry(id).then(() => onDeleteTimeEntrySuccess(id));
  };

  render() {
    const {
      timeEntries,
      isFormSaving,
      isFormVisible,
      onToggleFormVisibility
    } = this.props;
    const dateOptions = { weekday: 'long', day: 'numeric', month: '2-digit' };
    return (
      <React.Fragment>
        <TimeEntryForm
          isFormSaving={isFormSaving}
          isFormVisible={isFormVisible}
          onToggleFormVisibility={onToggleFormVisibility}
          onEntrySubmit={this.onEntrySubmit}
          timeEntries={timeEntries}
        />

        <section className="row time-entry-overview">
          {timeEntries.map((currentTimeEntry, index, array) => {
            // if (index === 0 ) { date + component } ------->> 0 is falsy
            // if (currentTimeEntry.date !== previousTimeEntry.date) { date + component }
            // if (currentTimeEntry.date === previousTimeEntry.date) { component }
            const dateFormatted = (date) => new Date(date).toLocaleDateString('en-NL', dateOptions).replace('/', '-').replace(',', '');
            return (
              <React.Fragment key={currentTimeEntry.id}>
                {(!index || (currentTimeEntry.date !== array[index - 1].date)) && (
                  <div className="time-entry__date-row">
                    <span className="text--secondary">
                      {`${dateFormatted(currentTimeEntry.date)} ${getRelativeDay(currentTimeEntry.date)}`}
                    </span>

                    <span className="text--secondary">
                      {new Date(calculateDurationPerDay(timeEntries, currentTimeEntry.date))
                        .toLocaleTimeString('nl-NL', { hour: 'numeric', minute: 'numeric' })}
                    </span>
                  </div>
                )}

                <TimeEntryDetail {...currentTimeEntry} />
              </React.Fragment>
            );
          })
        }
        </section>
      </React.Fragment>
    );
  }
}

export default TimeEntryOverview;
