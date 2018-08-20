import React from 'react';
import PropTypes from 'prop-types';

import './time-entry-detail.scss';

const timeOptions = { hour: 'numeric', minute: 'numeric' };

// calculateDuration = (timeFrom, timeTo) => (
// (new Date(timeTo).parse() - new Date(timeFrom).parse()) /1000/60/60/24 )

const TimeEntryDetail = ({
  client, id, timeFrom, timeTo
}) => (
  <div className="time-entry__project" key={id}>
    <div className="time-entry__client">
      <p>
        {client}
      </p>
    </div>
    <div className="time-entry__time">
      <p>
        {`
          ${new Date(`${timeFrom}`).toLocaleTimeString('nl-NL', timeOptions)}
          -
          ${new Date(`${timeTo}`).toLocaleTimeString('nl-NL', timeOptions)}
        `}
      </p>
      <p className="time-entry__duration">
        Duration
      </p>
    </div>
  </div>
);


TimeEntryDetail.propTypes = {
  client: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  timeFrom: PropTypes.string.isRequired,
  timeTo: PropTypes.string.isRequired
};

export default TimeEntryDetail;
