import React from 'react';

import Button from '../../shared/components/button/Button';
import SelectBox from '../../shared/components/select-box/SelectBox';
import InputField from '../../shared/components/input-field/InputField';

import { TimeEntryModel } from '../../ducks/time-entries';
import { ClientNameModel } from '../../ducks/clients';
import { convertTimeToIso, convertDateToIso, createIsoString } from '../../services/date-time/date-time';

import './time-entry-form.scss';

export interface TimeEntryFormProps {
  clientNames: ClientNameModel[];
  isFormSaving: boolean;
  isFormVisible: boolean;
  onEntrySubmit: (newTimeEntryFormatted: TimeEntryModel) => void;
  onToggleFormVisibility: (isFormVisible: boolean) => void;
}

export interface TimeEntryFormState {
  timeEntry: TimeEntryModel;
  validity: { date: boolean, timeFrom: boolean, timeTo: boolean };
}

class TimeEntryForm extends React.Component <TimeEntryFormProps, TimeEntryFormState> {
  private defaultState: TimeEntryFormState = {
    timeEntry: {
      activity: 'Design',
      clientId: '1',
      date: '',
      timeFrom: '',
      timeTo: ''
    },
    validity: {
      date: true,
      timeFrom: true,
      timeTo: true
    }
  };

  private formElement = React.createRef<HTMLFormElement>();

  readonly state: TimeEntryFormState = this.defaultState;

  handleFormVisibility = () => {
    this.props.onToggleFormVisibility(!this.props.isFormVisible);
  };

  handleBlur = ({ target }) => {
    this.setState((prevState: TimeEntryFormState) => ({
      validity: {
        ...prevState.validity,
        [target.name]: target.validity.valid
      }
    }));
  };

  handleChange = ({ target }) => {
    this.setState((prevState: TimeEntryFormState) => ({
      timeEntry: {
        ...prevState.timeEntry,
        [target.name]: target.value
      }
    }));
  };

  checkFormValidation = () => (
    // First check if the formElement exists
    // Then loop over each formElement and check its validity -> .every() returns boolean
    this.formElement.current && Array
      .from(this.formElement.current.elements)
      .every((input: HTMLInputElement) => input.validity.valid)
  );

  handleSubmit = (event) => {
    const { timeEntry } = this.state;
    const { date, timeFrom, timeTo } = timeEntry;
    event.preventDefault();

    const newTimeEntryFormatted: TimeEntryModel = {
      ...timeEntry,
      date: convertDateToIso(date),
      timeFrom: createIsoString(convertDateToIso(date), convertTimeToIso(timeFrom)),
      timeTo: createIsoString(convertDateToIso(date), convertTimeToIso(timeTo))
    };

    if (this.checkFormValidation()) {
      this.props.onEntrySubmit(newTimeEntryFormatted);
      this.setState(() => this.defaultState);
    }
  };

  render(): React.ReactNode {
    const { timeEntry, validity } = this.state;
    const {
      clientId, activity, date, timeFrom, timeTo
    } = timeEntry;
    const { clientNames, isFormSaving, isFormVisible } = this.props;
    return (
      <section className="time-entry-form">
        <h2 className="time-entry-form__title">
          New Time Entry
        </h2>
        <Button
          className={`
            time-entry-form__button-new
            time-entry-form__button-new--${isFormVisible ? 'hidden' : 'visible'}
          `}
          disabled={null}
          onClick={this.handleFormVisibility}
          type="button"
          value="New time entry"
        />

        <form
          className={`
            time-entry-form__form-container
            time-entry-form__form-container--${isFormVisible ? 'visible' : 'hidden'}`}
          onSubmit={this.handleSubmit}
          ref={this.formElement}
        >
          <div className="time-entry-form__form-wrapper">

            <button
              className="time-entry-form__button-close"
              onClick={this.handleFormVisibility}
              type="button"
            >
              <svg className="time-entry-form__icon-close" />
            </button>

            <label
              className="time-entry-form__label"
              htmlFor="clientId"
            >
              Client
              <SelectBox
                className="
                  time-entry-form__input
                  time-entry-form__select
                "
                selectedValue={clientId}
                name="clientId"
                onChange={this.handleChange}
                options={clientNames}
              />
            </label>

            <label
              className="time-entry-form__label"
              htmlFor="activity"
            >
              Activity
              <SelectBox
                className="
                  time-entry-form__input
                  time-entry-form__select
                "
                selectedValue={activity}
                name="activity"
                onChange={this.handleChange}
                options={[
                  { title: 'Design', value: 'Design' },
                  { title: 'Development', value: 'Development' },
                  { title: 'Meeting', value: 'Meeting' },
                  { title: 'Traveling', value: 'Traveling' }
                ]}
              />
            </label>

            {/* DATE */}
            <label
              className="time-entry-form__label"
              htmlFor="date"
            >
              Date
              <InputField
                className={`
                  time-entry-form__input
                  time-entry-form__input--${validity.date ? 'valid' : 'invalid'}
                `}
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

            <div className="time-entry-form__time-wrapper">
              <label
                className="
                  time-entry-form__label
                  time-entry-form__label--half
                  time-entry-form__time-from
                "
                htmlFor="time-from"
              >
                From
                <InputField
                  className={`
                    time-entry-form__input
                    time-entry-form__input--${validity.timeFrom ? 'valid' : 'invalid'}
                  `}
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

              <label
                className="
                  time-entry-form__label
                  time-entry-form__time-to
                "
                htmlFor="time-to"
              >
                To
                <InputField
                  className={`
                    time-entry-form__input
                    time-entry-form__input--${validity.timeTo ? 'valid' : 'invalid'}
                  `}
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

          <Button
            // Disable the Add button if the form is saving or if the form isn't valid (false)
            // this.checkFormValidation() is invoked each time the state updates after blurring ->
            // It will return return true/become enabled once all items are valid
            disabled={isFormSaving || !this.checkFormValidation()}
            className="time-entry-form__button-add"
            onClick={null}
            type="submit"
            value="Add"
          >
            Add
          </Button>
        </form>
      </section>
    );
  }
}

export default TimeEntryForm;
