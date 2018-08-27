import React from 'react';
import PropTypes from 'prop-types';
import { calculateDuration } from '../../services/date-time/date-time';

import './time-entry-detail.scss';

const timeOptions = { hour: 'numeric', minute: 'numeric' };

class TimeEntryDetail extends React.Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    client: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    timeFrom: PropTypes.string.isRequired,
    timeTo: PropTypes.string.isRequired,
    onEntryDelete: PropTypes.func.isRequired
  }

  handleClick = () => {
    const {
      client, date, onEntryDelete, id, timeFrom, timeTo
    } = this.props;
    console.log(id);
    const deleteEntryPrompt = prompt(`Are you sure you want to remove this entry?
    ${client} on ${new Date(date).toLocaleDateString('nl-NL')} (${new Date(timeFrom).toLocaleTimeString('nl-NL', timeOptions)} - ${new Date(timeTo).toLocaleTimeString('nl-NL', timeOptions)})`, 'OK, delete this entry');

    if (deleteEntryPrompt !== null) {
      onEntryDelete(id);
    }
  };

  render() {
    const { client, timeFrom, timeTo } = this.props;
    return (
      <div className="time-entry__project">
        <div className="time-entry__client">
          <p>
            {client}
          </p>

          <button
            className="btn time-entry__button-delete"
            onClick={this.handleClick}
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
            {new Date(calculateDuration(timeFrom, timeTo)).toLocaleTimeString('nl-NL', timeOptions)}
          </p>
        </div>
      </div>
    );
  }
}


export default TimeEntryDetail;
