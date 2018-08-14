import React from 'react';
import PropTypes from 'prop-types';

const TimeEntryDetail = ({ data }) => (
  data.map(timeEntry => (
    <article className="time-entry__date" key={timeEntry.projectId}>
      <h3 className="text--secondary">
        { timeEntry.projectDate }
      </h3>
      <div className="time-entry__project">
        <div className="time-entry__employer">
          <p>
            { timeEntry.employer }
          </p>
        </div>
        <div className="time-entry__time">
          <p>
            {`${timeEntry.timeFrom} - ${timeEntry.timeTo}`}
          </p>
        </div>
      </div>
    </article>
  ))
);

TimeEntryDetail.propTypes = {
  data: PropTypes.shape({
    projectDate: PropTypes.string.isRequired,
    projectId: PropTypes.number.isRequired,
    employer: PropTypes.string.isRequired,
    activity: PropTypes.string.isRequired,
    timeFrom: PropTypes.string.isRequired,
    timeTo: PropTypes.string.isRequired
  }).isRequired
};

export default TimeEntryDetail;
