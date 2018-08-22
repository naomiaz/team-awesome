import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { requestTimeEntries, requestTimeEntriesSuccess } from '../../ducks/time-entries';

import TimeEntryOverview from './TimeEntryOverview';

// Select items from your state to place in the props of your component
const mapStateToProps = (state) => ({
  timeEntries: state.timeEntries.items
});

// Dispatch events to props of your component
const mapDispatchToProps = (dispatch) => bindActionCreators({
  // Add the actioncreators
  requestTimeEntries,
  requestTimeEntriesSuccess
}, dispatch);

const TimeEntryOverviewContainer = (props) => (
  <TimeEntryOverview {...props} />
);

TimeEntryOverviewContainer.propTypes = TimeEntryOverview.propTypes;
// props van beide componenten zijn hetzelfde

export default connect(mapStateToProps, mapDispatchToProps)(TimeEntryOverviewContainer);
