import React from 'react';
// import PropTypes from 'prop-types';

import './TimeEntryForm.scss';

const TimeEntryForm = () => (
  <div className="row">
    <form className="time-entry">
      <div className="time-entry-wrapper">
        <div className="time-entry-employer">
          <label className="time-entry__label" htmlFor="employer">
            Employer
            <select className="time-entry__input" name="employer">
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
              <input type="time" name="time-from" className="time-entry__input" />
            </label>
          </div>
          <div className="time-entry-time__to">
            <label className="time-entry__label" htmlFor="time-to">
              To
              <input type="time" name="time-to" className="time-entry__input" />
            </label>
          </div>
        </div>
      </div>

      <button type="button" name="button" value="Add" className="time-entry__button">
        Add
      </button>
    </form>
  </div>
);

export default TimeEntryForm;
