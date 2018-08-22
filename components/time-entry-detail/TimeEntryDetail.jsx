import React from 'react';
import PropTypes from 'prop-types';
import { calculateDuration } from '../../services/date-time/date-time';


import './time-entry-detail.scss';

const timeOptions = { hour: 'numeric', minute: 'numeric' };

const TimeEntryDetail = ({
  client, handleEntryDelete, id, timeFrom, timeTo
}) => {
  const handleClick = () => {
    console.log(id);
    const deleteEntryPrompt = prompt(`Are you sure you want to remove this entry?
    ${client} (${new Date(timeFrom).toLocaleTimeString('nl-NL', timeOptions)} - ${new Date(timeTo).toLocaleTimeString('nl-NL', timeOptions)})`, 'OK, delete this entry');
    if (deleteEntryPrompt !== null) {
      handleEntryDelete(id);
    }
  };

  return (
    <div className="time-entry__project">
      <div className="time-entry__client">
        <p>
          {client}
        </p>

        <button
          className="btn time-entry__button-delete"
          onClick={handleClick}
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
};

TimeEntryDetail.propTypes = {
  id: PropTypes.number.isRequired,
  client: PropTypes.string.isRequired,
  timeFrom: PropTypes.string.isRequired,
  timeTo: PropTypes.string.isRequired,
  handleEntryDelete: PropTypes.func.isRequired
};

export default TimeEntryDetail;
