import React from 'react';
import PropTypes from 'prop-types';

import './time-entry-detail.scss';

const TimeEntryDetail = ({
  client, projectId, timeFrom, timeTo
}) => (
  <div className="time-entry__project" key={projectId}>
    <div className="time-entry__client">
      <p>
        {client}
      </p>
    </div>
    <div className="time-entry__time">
      <p>
        {`${timeFrom} - ${timeTo}`}
      </p>
    </div>
  </div>
);

TimeEntryDetail.propTypes = {
  client: PropTypes.string.isRequired,
  projectId: PropTypes.string.isRequired,
  timeFrom: PropTypes.string.isRequired,
  timeTo: PropTypes.string.isRequired
};

export default TimeEntryDetail;
