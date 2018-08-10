import React from 'react';

import './TimeEntryForm.scss';

class TimeEntryForm extends React.Component {
  state = { open: false };

  formOpen = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }));
  };

  render() {
    const { open } = this.state;
    return (
      <div className="row">
        <button
          className={`time-entry__button-new${open ? '--hidden' : '--visible'}`}
          onClick={this.formOpen}
          type="button"
        >
          <svg className="time-entry__icon--open" />
          New time entry
        </button>

        <form
          className={`time-entry ${open ? ' time-entry--visible' : ' time-entry--hidden'}`}
        >
          <div className="time-entry-wrapper">
            <button
              className="time-entry__button-close"
              onClick={this.formOpen}
              type="button"
            >
              <svg className="time-entry__icon--close" />
            </button>
            <div className="time-entry-employer">
              <label className="time-entry__label" htmlFor="employer">
                Employer
                <select className="time-entry__input" name="employer" id="employer">
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
              <label className="time-entry__label" htmlFor="activity">
                Activity
                <select className="time-entry__input" name="activity" id="activity">
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
              <label className="time-entry__label" htmlFor="date">
                Date
                <input type="date" name="date" className="time-entry__input" />
              </label>
            </div>

            <div className="time-entry-time">
              <div className="time-entry-time__from">
                <label className="time-entry__label" htmlFor="time-from">
                  From
                  <input className="time-entry__input" id="time-from" name="time-from" min="08:00" max="18:00" type="time" />
                </label>
              </div>
              <div className="time-entry-time__to">
                <label className="time-entry__label" htmlFor="time-to">
                  To
                  <input className="time-entry__input" id="time-to" name="time-to" min="08:00" max="20:00" type="time" />
                </label>
              </div>
            </div>
          </div>

          <button type="button" name="button" value="Add" className="time-entry__button-add">
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default TimeEntryForm;
