import React from 'react';
import PropTypes from 'prop-types';
import { calculateDuration } from '../../services/date-time/date-time';

import './time-entry-item.scss';

const timeOptions = { hour: 'numeric', minute: 'numeric' };

class TimeEntryDetail extends React.Component {
  static propTypes = {
    client: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    onEntryDelete: PropTypes.func.isRequired,
    timeFrom: PropTypes.string.isRequired,
    timeTo: PropTypes.string.isRequired
  }

  handleClick = () => {
    const {
      client, date, onEntryDelete, id, timeFrom, timeTo
    } = this.props;
    const deleteEntryPrompt = prompt(`Are you sure you want to remove this entry?
    ${client} on ${new Date(date).toLocaleDateString('nl-NL')} (${new Date(timeFrom).toLocaleTimeString('nl-NL', timeOptions)} - ${new Date(timeTo).toLocaleTimeString('nl-NL', timeOptions)})`, 'OK, delete this entry');

    if (deleteEntryPrompt) {
      onEntryDelete(id);
    }
  };

  render() {
    const { client, timeFrom, timeTo } = this.props;
    return (
      <div className="time-entry-item">
        <div className="time-entry-item__client">
          <span>
            {client}
          </span>

          <button
            className="btn time-entry-item__button-delete"
            onClick={this.handleClick}
            type="button"
          >
            {/* <svg className="time-entry-item__icon-delete" /> */}
            Delete
          </button>

        </div>
        <div className="time-entry-item__time">
          <span>
            {`
              ${new Date(timeFrom).toLocaleTimeString('nl-NL', timeOptions)}
              -
              ${new Date(timeTo).toLocaleTimeString('nl-NL', timeOptions)}
            `}
          </span>
          <span className="time-entry-item__duration">
            {new Date(calculateDuration(timeFrom, timeTo)).toLocaleTimeString('nl-NL', timeOptions)}
          </span>
        </div>
      </div>
    );
  }
}


export default TimeEntryDetail;
