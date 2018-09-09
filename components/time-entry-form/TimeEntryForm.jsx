import React from 'react';
import PropTypes from 'prop-types';

import { convertTimeToIso, convertDateToIso, createIsoString } from '../../services/date-time/date-time';

import './time-entry-form.scss';

class TimeEntryForm extends React.Component {
  static timeEntriesDefaultValues = {
    timeEntry: {
      client: 'Port of Rotterdam',
      activity: 'Design',
      date: '',
      timeFrom: '',
      timeTo: ''
    },
    validity: {
      // True by default so that form doesn't show errors on page load
      date: true,
      timeFrom: true,
      timeTo: true
    }
  };

  static propTypes = {
    onEntrySubmit: PropTypes.func.isRequired,
    onToggleFormVisibility: PropTypes.func.isRequired,
    isFormSaving: PropTypes.bool.isRequired,
    isFormVisible: PropTypes.bool.isRequired
  };

  constructor(props) {
    super(props);
    this.formElement = React.createRef();
  }

  state = {
    timeEntry: TimeEntryForm.timeEntriesDefaultValues.timeEntry,
    validity: TimeEntryForm.timeEntriesDefaultValues.validity
  };


  handleFormVisibility = () => {
    const { onToggleFormVisibility, isFormVisible } = this.props;
    onToggleFormVisibility(!isFormVisible);
  };

  handleBlur = ({ target }) => {
    // check validity on blur
    this.setState((prevState) => ({
      validity: {
        ...prevState.validity,
        // e.g. date: true
        [target.name]: target.validity.valid
      }
    }));
  }

  handleChange = ({ target }) => {
    this.setState((prevState) => ({
      timeEntry: {
        ...prevState.timeEntry,
        [target.name]: target.value
      }
    }));
  }

  checkFormValidation = () => (
    // First check if the formElement exists
    // Then loop over each formElement and check its validity -> .every() returns boolean
    this.formElement.current
    && Array.from(this.formElement.current.elements).every((input) => input.validity.valid)
  )

  handleSubmit = (event) => {
    event.preventDefault();

    if (!this.checkFormValidation()) {
      return;
    }

    const { timeEntry } = this.state;
    const { date, timeFrom, timeTo } = timeEntry;
    const { onEntrySubmit } = this.props;
    // Convert the dates/times to ISOStrings before updating the state
    const newTimeEntryFormatted = {
      ...timeEntry,
      date: convertDateToIso(date),
      timeFrom: createIsoString(convertDateToIso(date), convertTimeToIso(timeFrom)),
      timeTo: createIsoString(convertDateToIso(date), convertTimeToIso(timeTo))
    };

    onEntrySubmit(newTimeEntryFormatted);

    // 'Clear' inputs -> reset default values constructed in static class
    this.setState({ timeEntry: TimeEntryForm.timeEntriesDefaultValues.timeEntry });
  };


  render() {
    const { timeEntry, validity } = this.state;
    const {
      client, activity, date, timeFrom, timeTo
    } = timeEntry;
    const { isFormSaving, isFormVisible } = this.props;

    return (
      <section className="row">
        <h2 className="time-entry-form__header">
          New Time Entry
        </h2>
        <button
          className={`btn time-entry-form__button-new${isFormVisible ? '--hidden' : '--visible'}`}
          onClick={this.handleFormVisibility}
          type="button"
        >
          <svg className="time-entry-form__icon--open" />
          New time entry
        </button>

        <form
          className={`time-entry-form ${isFormVisible ? 'time-entry-form--visible' : 'time-entry-form--hidden'}`}
          onSubmit={this.handleSubmit}
          ref={this.formElement}
        >
          <div className="time-entry-form__form-wrapper">
            <button
              className="time-entry-form__button-close"
              onClick={this.handleFormVisibility}
              type="button"
            >
              <svg className="time-entry-form__icon--close" />
            </button>

            <div className="time-entry-form-client">
              <label
                className="time-entry-form__label"
                htmlFor="client"
              >
                Client
                <select
                  className="time-entry-form__input"
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

            <div className="time-entry-form-activity">
              <label
                className="time-entry-form__label"
                htmlFor="activity"
              >
                Activity
                <select
                  className="time-entry-form__input"
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

            <div className="time-entry-form-date">
              <label
                className="time-entry-form__label"
                htmlFor="date"
              >
                Date
                <input
                  className={`
                    time-entry-form__input
                    time-entry-form__input--${validity.date ? 'valid' : 'invalid'}
                  `}
                  id="date"
                  name="date"
                  onBlur={this.handleBlur}
                  onChange={this.handleChange}
                  pattern="(0[1-9]|[1-2][0-9]|3[0-1])[-](0[1-9]|1[0-2])[-]20[0-1][0-9]"
                  placeholder="DD-MM-YYYY"
                  required
                  type="text"
                  value={date}
                />
              </label>
            </div>

            <div className="time-entry-form-time">
              <div className="time-entry-form-time__from">
                <label
                  className="time-entry-form__label"
                  htmlFor="time-from"
                >
                  From
                  <input
                    className={`
                      time-entry-form__input
                      time-entry-form__input--${validity.timeFrom ? 'valid' : 'invalid'}
                    `}
                    id="time-from"
                    name="timeFrom"
                    onBlur={this.handleBlur}
                    onChange={this.handleChange}
                    pattern="(0[0-9]|1[0-9]|2[0-3])[.](0[0-9]|[1-5][0-9])"
                    placeholder="HH.MM"
                    required
                    type="text"
                    value={timeFrom}
                  />
                </label>
              </div>
              <div className="time-entry-form-time__to">
                <label
                  className="time-entry-form__label"
                  htmlFor="time-to"
                >
                  To
                  <input
                    className={`
                      time-entry-form__input
                      time-entry-form__input--${validity.timeTo ? 'valid' : 'invalid'}
                    `}
                    id="time-to"
                    name="timeTo"
                    onBlur={this.handleBlur}
                    onChange={this.handleChange}
                    pattern="(0[0-9]|1[0-9]|2[0-3])[.](0[0-9]|[1-5][0-9])"
                    placeholder="HH.MM"
                    required
                    type="text"
                    value={timeTo}
                  />
                </label>
              </div>
            </div>
          </div>

          <button
            // Disable the Add button if the form is saving or if the form isn't valid (false)
            // this.checkFormValidation() is invoked each time the state updates after blurring ->
            // It will return return true/become enabled once all items are valid
            disabled={isFormSaving || !this.checkFormValidation()}
            className="btn time-entry-form__button-add"
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
