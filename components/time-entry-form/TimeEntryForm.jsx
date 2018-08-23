import React from 'react';
import PropTypes from 'prop-types';

import { convertTimeToIso, convertDateToIso, createIsoString } from '../../services/date-time/date-time';

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
    onEntrySubmit: PropTypes.func.isRequired,
    onToggleFormVisibility: PropTypes.func.isRequired,
    isFormSaving: PropTypes.bool.isRequired,
    isFormVisible: PropTypes.bool.isRequired
  };

  state = {
    timeEntry: TimeEntryForm.timeEntriesDefaultValues
  };


  handleFormVisibility = () => {
    const { onToggleFormVisibility, isFormVisible } = this.props;
    onToggleFormVisibility(!isFormVisible);
  };

  handleChange = ({ target }) => {
    this.setState((prevState) => ({
      timeEntry: {
        ...prevState.timeEntry,
        [target.name]: target.value
      }
    }));
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // Deconstruct timeEntry from the state and handleEntrySubmit() from the props
    const { timeEntry } = this.state;
    const { date, timeFrom, timeTo } = timeEntry;
    const { onEntrySubmit } = this.props;
    // Convert the dates/times to ISOStrings before sending the data back to the parent
    const dateFormatted = convertDateToIso(date);
    const timeFromFormatted = createIsoString(dateFormatted, convertTimeToIso(timeFrom));
    const timeToFormatted = createIsoString(dateFormatted, convertTimeToIso(timeTo));
    // Update the state
    const newTimeEntryFormatted = {
      ...timeEntry,
      date: dateFormatted,
      timeFrom: timeFromFormatted,
      timeTo: timeToFormatted
    };
    // Disable Add btn (true), save the newTimeEntry, and only after saving enable Add btn (false)
    onEntrySubmit(newTimeEntryFormatted);
    // 'Clear' inputs -> reset default values constructed in static class
    this.setState({ timeEntry: TimeEntryForm.timeEntriesDefaultValues });
  };


  render() {
    // const { isFormVisible, timeEntry } = this.state;
    const { timeEntry } = this.state;
    const { isFormSaving, isFormVisible } = this.props;
    const {
      client, activity, date, timeFrom, timeTo
    } = timeEntry;

    return (
      <section className="row">
        <h2 className="time-entry__title">
          New Time Entry
        </h2>
        <button
          className={`btn time-entry__button-new${isFormVisible ? '--hidden' : '--visible'}`}
          onClick={this.handleFormVisibility}
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
              onClick={this.handleFormVisibility}
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
                  placeholder="DD-MM-YYYY"
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
            disabled={isFormSaving}
            className="btn time-entry__button-add"
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
