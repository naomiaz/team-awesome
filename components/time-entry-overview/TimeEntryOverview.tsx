import React from 'react';

import PageHeader from '../../shared/components/page-header/PageHeader';
import SelectBox from '../../shared/components/select-box/SelectBox';
import TimeEntryForm from '../time-entry-form/TimeEntryForm';
import TimeEntryItem from '../time-entry-item/TimeEntryItem';

import { TimeEntryModel } from '../../ducks/time-entries';
import { ClientNameModel } from '../../ducks/clients';
import { getRelativeDay, calculateDurationPerDay } from '../../services/date-time/date-time';

import './time-entry-overview.scss';

export interface TimeEntryOverviewProps {
  activeFilter: string;
  timeEntries: TimeEntryModel[];
  timeEntriesUnfiltered: TimeEntryModel[];
  clientNames: ClientNameModel[];
  isFormSaving: boolean;
  isFormVisible: boolean;
  onDeleteTimeEntry: (id: number) => void;
  onFilterTimeEntries: (filterValue: string) => void;
  onRequestTimeEntries: () => void;
  onRequestClients: () => void;
  onSaveTimeEntry: (newTimeEntry: TimeEntryModel) => void;
  onToggleFormVisibility:(isFormVisible: boolean) => void;
  pageTitle: string;
  unitCount: number;
  unitSingular: string;
  unitPlural: string;
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

  checkArrayLength = () => {
    const { timeEntries, timeEntriesUnfiltered } = this.props;
    if (!timeEntriesUnfiltered.length) {
      return (
        <span className="time-entry-overview__copy">
          There are currently no timesheets. Add your first timesheet now!
        </span>
      );
    }
    else if (!timeEntries.length) {
      return (
        <span className="time-entry-overview__copy">
          There are no timesheets of this client yet.
        </span>
      );
    }
    return false;
  };

  render(): React.ReactNode {
    const {
      activeFilter,
      clientNames,
      timeEntries,
      isFormSaving,
      isFormVisible,
      onFilterTimeEntries,
      onToggleFormVisibility,
      timeEntriesUnfiltered
    } = this.props;
    const dateOptions = { weekday: 'long', day: 'numeric', month: '2-digit' };
    return (
      <React.Fragment>
        <PageHeader
          // only show filter when there are timesheets
          selectBox={!timeEntriesUnfiltered.length
            ? []
            : [{
                onChange: (event) => onFilterTimeEntries(event.target.value),
                options: [{ title: 'All clients:', value: '' }, ...clientNames],
                selectedValue: activeFilter
              }]
          }
          pageTitle="Timesheets"
          unitCount={timeEntries.length}
          unitPlural="Entries"
          unitSingular="Entry"
        />

        <TimeEntryForm
          isFormSaving={isFormSaving}
          isFormVisible={isFormVisible}
          onToggleFormVisibility={onToggleFormVisibility}
          onEntrySubmit={this.onEntrySubmit}
          clientNames={clientNames}
        />

        <section className="time-entry-overview">
          { // only show filter when there are timesheets
            !timeEntriesUnfiltered.length
            ? ''
            : <SelectBox
                className="time-entry-overview__filter"
                name=""
                onChange={(event) => onFilterTimeEntries(event.target.value)}
                options={[{ title: 'All clients:', value: '' }, ...clientNames]}
                selectedValue={activeFilter}
              />
          }

          {this.checkArrayLength() ||
          timeEntries.map((currentTimeEntry, index, array) => {
            // if (index === 0 ) { date + component } ------->> 0 is falsy
            // if (currentTimeEntry.date !== previousTimeEntry.date) { date + component }
            // if (currentTimeEntry.date === previousTimeEntry.date) { component }
            const dateFormatted = (date) => new Date(date).toLocaleDateString('en-NL', dateOptions).replace('/', '-').replace(',', '');
            return (
              <React.Fragment key={currentTimeEntry.id}>
                {(!index || (currentTimeEntry.date !== array[index - 1].date)) && (
                  <h2 className="time-entry-overview__date-row">
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
