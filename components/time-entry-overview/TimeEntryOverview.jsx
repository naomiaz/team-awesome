import React from 'react';

import TimeEntryForm from '../time-entry-form/TimeEntryForm';
import TimeEntryDetail from '../time-entry-detail/TimeEntryDetail';
import timeEntryData from './mock-database.json';

import './time-entry-overview.scss';

// const convertDateToISO = (entryDate) => new Date(Date.parse(entryDate.value)).toISOString();
// const convertTime = (entryTime) => (Date.parse(entryTime.value))/1000/;


class TimeEntryOverview extends React.Component {
  state = {
    isFormVisible: false,
    timeEntries: timeEntryData,
    client: 'Default Client',
    activity: 'Default Activity',
    date: '01-01-2001',
    from: '00:01',
    to: '00:10'
  }

  onEntrySubmit = (event) => {
    event.preventDefault();
    const newTimeEntry = {
      projectDate: this.state.date,
      projectId: '001',
      client: this.state.client,
      activity: this.state.activity,
      timeFrom: this.state.from,
      timeTo: this.state.to
    };

    // console.log(this.state);

    this.setState(prevState => ({
      ...prevState,
      timeEntries: [
        newTimeEntry,
        ...prevState.timeEntries
      ]
    }));

    console.log(this.state);

    // console.log(newTimeEntry, ...timeEntries);
    // generateTimesheet(newTimeEntry);

    // projectDate: convertDate(document.querySelector('.time-entry__input#date').value),
    // projectId: parseInt(timeEntries[index-1], 10),
    // client: document.querySelector('.time-entry__input#client').textContent,
    // activity: document.querySelector('.time-entry__input#activity').textContent,
    // timeFrom: '10:00',
    // timeTo: '15:00'
  };

  formVisible = () => {
    this.setState(prevState => ({
      isFormVisible: !prevState.isFormVisible
    }));
  }

  handleChange = ({ target }) => {
    // handleChange vult de state met de waardes uit het formulier (setState(this.state))
    this.setState(prevState => ({
      ...prevState,
      [target.name]: target.value
    }));
  }

  render() {
    const { isFormVisible, timeEntries } = this.state;
    return (
      <React.Fragment>
        <TimeEntryForm
          formVisible={this.formVisible}
          handleChange={this.handleChange}
          isFormVisible={isFormVisible}
          onEntrySubmit={this.onEntrySubmit}
        />

        <section className="row time-entry-overview">
          {timeEntries.map((currentTimeEntry, index, array) => (
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
          ))}
        </section>
      </React.Fragment>
    );
  }
}

export default TimeEntryOverview;
