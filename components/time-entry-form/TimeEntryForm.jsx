import React from 'react';

import './TimeEntryForm.scss';

class TimeEntryForm extends React.Component {
  state = { isFormVisible: false };

  formVisible = () => {
    this.setState(prevState => ({
      isFormVisible: !prevState.isFormVisible
    }));
  };

  render() {
    const { isFormVisible } = this.state;

    return (
      <div className="row">
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
        >
          <div className="time-entry-wrapper">
            <button
              className="time-entry__button-close"
              onClick={this.formVisible}
              type="button"
            >
              <svg className="time-entry__icon--close" />
            </button>
            <div className="time-entry-employer">
              <label
                className="time-entry__label"
                htmlFor="employer"
              >
                Employer
                <select
                  className="time-entry__input"
                  id="employer"
                  name="employer"
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
                  name="date"
                  type="date"
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
                    defaultValue="08:00"
                    id="time-from"
                    max="18:00"
                    min="08:00"
                    name="time-from"
                    type="time"
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
                    defaultValue="18:00"
                    id="time-to"
                    max="20:00"
                    min="08:00"
                    name="time-to"
                    type="time"
                  />
                </label>
              </div>
            </div>
          </div>

          <button
            className="time-entry__button-add"
            name="button"
            type="button"
            value="Add"
          >
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default TimeEntryForm;
