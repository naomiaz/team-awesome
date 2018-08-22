import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
getTimeEntries, requestTimeEntries, requestTimeEntriesSuccess, saveTimeEntry, saveTimeEntrySuccess
} from '../../ducks/time-entries';
import TimeEntryOverview from './TimeEntryOverview';

// Select items from your state to place in the props of your component
const mapStateToProps = (state) => ({
  timeEntries: getTimeEntries(state),
  isFormSaving: state.timeEntries.isSaving
});

// Dispatch events to props of your component
const mapDispatchToProps = (dispatch) => bindActionCreators({
  // Add the actioncreators
  requestTimeEntries,
  requestTimeEntriesSuccess,
  saveTimeEntry,
  saveTimeEntrySuccess
}, dispatch);

const TimeEntryOverviewContainer = (props) => (
  <TimeEntryOverview {...props} />
);

TimeEntryOverviewContainer.propTypes = TimeEntryOverview.propTypes;
// props van beide componenten zijn hetzelfde

export default connect(mapStateToProps, mapDispatchToProps)(TimeEntryOverviewContainer);
