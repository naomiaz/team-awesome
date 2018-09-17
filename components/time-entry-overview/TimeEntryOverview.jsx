import React from 'react';
import PropTypes from 'prop-types';
import TimeEntryForm from '../time-entry-form/TimeEntryForm';
import TimeEntryItem from '../time-entry-item/TimeEntryItem';
import { getRelativeDay, calculateDurationPerDay } from '../../services/date-time/date-time';

import './time-entry-overview.scss';

class TimeEntryOverview extends React.Component {
  static propTypes = {
    clientNames: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired
      }).isRequired
    ).isRequired,
    isFormSaving: PropTypes.bool.isRequired,
    isFormVisible: PropTypes.bool.isRequired,
    onDeleteTimeEntry: PropTypes.func.isRequired,
    onRequestTimeEntries: PropTypes.func.isRequired,
    onSaveTimeEntry: PropTypes.func.isRequired,
    onToggleFormVisibility: PropTypes.func.isRequired,
    timeEntries: PropTypes.arrayOf(
      PropTypes.shape({
        activity: PropTypes.string.isRequired,
        clientId: PropTypes.string.isRequired,
        clientLabel: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        timeFrom: PropTypes.string.isRequired,
        timeTo: PropTypes.string.isRequired
      })
    ).isRequired
  }

  componentDidMount() {
    const { onRequestTimeEntries } = this.props;
    onRequestTimeEntries();
  }

  onEntrySubmit = (newTimeEntry) => {
    const { onSaveTimeEntry } = this.props;
    onSaveTimeEntry(newTimeEntry);
  };

  onEntryDelete = (id) => {
    const { onDeleteTimeEntry } = this.props;
    onDeleteTimeEntry(id);
  };

  render() {
    const {
      clientNames,
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
          clientNames={clientNames}
        />

        <section className="time-entry-overview">
          {timeEntries.map((currentTimeEntry, index, array) => {
            // if (index === 0 ) { date + component } ------->> 0 is falsy
            // if (currentTimeEntry.date !== previousTimeEntry.date) { date + component }
            // if (currentTimeEntry.date === previousTimeEntry.date) { component }
            const dateFormatted = (date) => new Date(date).toLocaleDateString('en-NL', dateOptions).replace('/', '-').replace(',', '');
            return (
              <React.Fragment key={currentTimeEntry.id}>
                {(!index || (currentTimeEntry.date !== array[index - 1].date)) && (
                  <h2 className="time-entry__date-row">
                    <span>
                      {`${dateFormatted(currentTimeEntry.date)}
                      ${getRelativeDay(currentTimeEntry.timeFrom)}`}
                    </span>

                    <span>
                      {new Date(calculateDurationPerDay(timeEntries, currentTimeEntry.date))
                        .toLocaleTimeString('nl-NL', { hour: 'numeric', minute: 'numeric' })}
                    </span>
                  </h2>
                )}

                <TimeEntryItem
                  {...currentTimeEntry}
                  onEntryDelete={this.onEntryDelete}
                />
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
