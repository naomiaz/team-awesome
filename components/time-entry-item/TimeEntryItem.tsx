import React from 'react';
import Button from '../../shared/components/button/Button';
import { calculateDuration } from '../../services/date-time/date-time';

import './time-entry-item.scss';

const timeOptions = { hour: 'numeric', minute: 'numeric' };

export interface TimeEntryItemProps {
  clientLabel?: string;
  date: string;
  id?: number;
  timeFrom: string;
  timeTo: string;
  onEntryDelete: any;
}

class TimeEntryItem extends React.Component <TimeEntryItemProps> {
  handleClick = () => {
    const {
      clientLabel, date, id, timeFrom, timeTo
    } = this.props;
    const deleteEntryConfirm = window.confirm(`Are you sure you want to remove this entry?
      ${clientLabel} on ${new Date(date).toLocaleDateString('nl-NL')} (${new Date(timeFrom).toLocaleTimeString('nl-NL', timeOptions)} - ${new Date(timeTo).toLocaleTimeString('nl-NL', timeOptions)})`);

    if (deleteEntryConfirm) {
      this.props.onEntryDelete(id);
    }
  };

  render(): React.ReactNode {
    const { clientLabel, timeFrom, timeTo } = this.props;
    return (
      <div className="time-entry-item">
        <div className="time-entry-item__client">
          <span>
            {clientLabel}
          </span>

          <Button
            className="time-entry-item__button-delete"
            disabled={null}
            onClick={this.handleClick}
            type="button"
            value="Delete"
          />
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


export default TimeEntryItem;
