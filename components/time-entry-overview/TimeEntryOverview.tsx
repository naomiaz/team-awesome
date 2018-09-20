import React from 'react';
import TimeEntryForm from '../time-entry-form/TimeEntryForm';
import TimeEntryItem from '../time-entry-item/TimeEntryItem';
import { TimeEntryModel } from '../../ducks/time-entries';
import { ClientNameModel } from '../../ducks/clients';
import { getRelativeDay, calculateDurationPerDay } from '../../services/date-time/date-time';

import './time-entry-overview.scss';

export interface TimeEntryOverviewProps {
  timeEntries: TimeEntryModel[];
  clientNames: ClientNameModel[];
  isFormSaving: boolean;
  isFormVisible: boolean;
  onDeleteTimeEntry: (id: number) => void;
  onRequestTimeEntries: () => void;
  onRequestClients: () => void;
  onSaveTimeEntry: (newTimeEntry) => void;
  onToggleFormVisibility:(isFormVisible: boolean) => void;
}


class TimeEntryOverview extends React.Component <TimeEntryOverviewProps> {
  componentDidMount() {
    this.props.onRequestClients();
    this.props.onRequestTimeEntries();
  }

  onEntrySubmit = (newTimeEntry) => {
    this.props.onSaveTimeEntry(newTimeEntry);
  };

  onEntryDelete = (id) => {
    this.props.onDeleteTimeEntry(id);
  };

  render(): React.ReactNode {
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
