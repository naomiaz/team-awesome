import React from 'react';
import PropTypes from 'prop-types';
import { calculateDuration } from '../../services/date-time/date-time';

import './time-entry-detail.scss';

const timeOptions = { hour: 'numeric', minute: 'numeric' };

const TimeEntryDetail = ({ client, timeFrom, timeTo }) => (
  <div className="time-entry__project">
    <div className="time-entry__client">
      <p>
        {client}
      </p>

      <button
        className="btn time-entry__button-delete"
        type="button"
      >
        <svg className="time-entry__icon--delete" />
        Delete
      </button>

    </div>
    <div className="time-entry__time">
      <p>
        {`
          ${new Date(timeFrom).toLocaleTimeString('nl-NL', timeOptions)}
          -
          ${new Date(timeTo).toLocaleTimeString('nl-NL', timeOptions)}
        `}
      </p>
      <p className="time-entry__duration">
        {calculateDuration(timeFrom, timeTo)}
      </p>
    </div>
  </div>
);

TimeEntryDetail.propTypes = {
  client: PropTypes.string.isRequired,
  timeFrom: PropTypes.string.isRequired,
  timeTo: PropTypes.string.isRequired
};

export default TimeEntryDetail;
