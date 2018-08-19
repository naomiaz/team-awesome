import React from 'react';
import PropTypes from 'prop-types';

import './time-entry-form.scss';

class TimeEntryForm extends React.Component {
  static timeEntriesDefaultValues = {
    client: 'Port of Rotterdam',
    activity: 'Design',
    date: '',
    timeFrom: '',
    timeTo: ''
  };

  static propTypes = {
    handleEntrySubmit: PropTypes.func.isRequired
  };

  state = {
    isFormVisible: false,
    timeEntry: TimeEntryForm.timeEntriesDefaultValues
  };

  formVisible = () => {
    this.setState((prevState) => ({
      isFormVisible: !prevState.isFormVisible
    }));
  }

  convertDotToColon = (time) => time.replace('.', ':')

  convertDateToUS = (date) => {
    const dateSplitted = date.split('-');
    return `${dateSplitted[2]}-${dateSplitted[1]}-${dateSplitted[0]}`;
  }

  createISOString = (date, time) => new Date(`${date} ${time}`).toISOString();

  convertDateTimeToISO = (stateCopied) => {
    const { date, timeFrom, timeTo } = stateCopied.timeEntry;
    const dateFormatted = this.convertDateToUS(date);
    const timeFromFormatted = this.createISOString(dateFormatted, this.convertDotToColon(timeFrom));
    const timeToFormatted = this.createISOString(dateFormatted, this.convertDotToColon(timeTo));
    return {
      ...stateCopied.timeEntry,
      date: dateFormatted,
      timeFrom: timeFromFormatted,
      timeTo: timeToFormatted
    };
  }

  handleChange = ({ target }) => {
    this.setState((prevState) => ({
      timeEntry: {
        ...prevState.timeEntry,
        [target.name]: target.value
      }
    }));
  }

  handleSubmit = (event) => {
    // Prevent the page from refreshing when the Add button is clicked
    event.preventDefault();
    // Deconstruct handleEntrySubmit() from the props (as it's defined in the parent)
    const { handleEntrySubmit } = this.props;
    // Copy the curryent state to avoid direct date/time mutation
    const stateCopied = { ...this.state };

    // Convert the dates/times to ISOStrings before sending the data back to the parent
    handleEntrySubmit(this.convertDateTimeToISO(stateCopied));
    // 'Clear' inputs -> reset default values constructed in static class
    this.setState({ timeEntry: TimeEntryForm.timeEntriesDefaultValues });
  }

  render() {
    const { isFormVisible, timeEntry } = this.state;
    const {
      client, activity, date, timeFrom, timeTo
    } = timeEntry;

    return (
      <section className="row">
        <h2 className="time-entry__title">
          New Time Entry
        </h2>
        <button
          className={`time-entry__button-new${isFormVisible ? '--hidden' : '--visible'}`}
          onClick={this.formVisible}
          type="button"
        >
          <svg className="time-entry__icon--open" />
          New time entry
        </button>

        <form
          className={`time-entry ${isFormVisible ? ' time-entry--visible' : ' time-entry--hidden'}`}
          onSubmit={this.handleSubmit}
        >
          <div className="time-entry-wrapper">
            <button
              className="time-entry__button-close"
              onClick={this.formVisible}
              type="button"
            >
              <svg className="time-entry__icon--close" />
            </button>

            <div className="time-entry-client">
              <label
                className="time-entry__label"
                htmlFor="client"
              >
                Client
                <select
                  className="time-entry__input"
                  id="client"
                  name="client"
                  onChange={this.handleChange}
                  value={client}
                >
                  <option value="Port of Rotterdam">
                    Port of Rotterdam
                  </option>
                  <option value="Saab">
                    Saab
                  </option>
                  <option value="Mercedes">
                    Mercedes
                  </option>
                  <option value="Audi">
                    Audi
                  </option>
                </select>
              </label>
            </div>

            <div className="time-entry-activity">
              <label
                className="time-entry__label"
                htmlFor="activity"
              >
                Activity
                <select
                  className="time-entry__input"
                  id="activity"
                  name="activity"
                  onChange={this.handleChange}
                  value={activity}
                >
                  <option value="Design">
                    Design
                  </option>
                  <option value="Saab">
                    Saab
                  </option>
                  <option value="Mercedes">
                    Mercedes
                  </option>
                  <option value="Audi">
                    Audi
                  </option>
                </select>
              </label>
            </div>

            <div className="time-entry-date">
              <label
                className="time-entry__label"
                htmlFor="date"
              >
                Date
                <input
                  className="time-entry__input"
                  id="date"
                  name="date"
                  onChange={this.handleChange}
                  placeholder="DD-MM-JJJJ"
                  type="text"
                  value={date}
                />
              </label>
            </div>

            <div className="time-entry-time">
              <div className="time-entry-time__from">
                <label
                  className="time-entry__label"
                  htmlFor="time-from"
                >
                  From
                  <input
                    className="time-entry__input"
                    id="time-from"
                    name="timeFrom"
                    onChange={this.handleChange}
                    placeholder="HH.MM"
                    type="text"
                    value={timeFrom}
                  />
                </label>
              </div>
              <div className="time-entry-time__to">
                <label
                  className="time-entry__label"
                  htmlFor="time-to"
                >
                  To
                  <input
                    className="time-entry__input"
                    id="time-to"
                    name="timeTo"
                    onChange={this.handleChange}
                    placeholder="HH.MM"
                    type="text"
                    value={timeTo}
                  />
                </label>
              </div>
            </div>
          </div>

          <button
            className="time-entry__button-add"
            name="button"
            type="submit"
            value="Add"
          >
            Add
          </button>
        </form>
      </section>
    );
  }
}

export default TimeEntryForm;
