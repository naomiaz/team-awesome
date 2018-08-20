import React from 'react';
import PropTypes from 'prop-types';

import './time-entry-detail.scss';

const timeOptions = { hour: 'numeric', minute: 'numeric' };

const calculateDuration = (timeFrom, timeTo) => new Date((Date.parse(timeTo)
- Date.parse(timeFrom) - 3600000)).toLocaleTimeString('nl-NL', timeOptions);

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
        {calculateDuration(timeFrom, timeTo)}
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
