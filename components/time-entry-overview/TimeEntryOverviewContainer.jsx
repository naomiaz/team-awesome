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
  isFormSaving: state.timeEntries.isFormSaving
});

// Dispatch the actioncreators to props of a component
const mapDispatchToProps = (dispatch) => bindActionCreators({
  requestTimeEntries,
  requestTimeEntriesSuccess,
  saveTimeEntry,
  saveTimeEntrySuccess
}, dispatch);

const TimeEntryOverviewContainer = (props) => (
  <TimeEntryOverview {...props} />
);

// Props of parent are equal to props of child
TimeEntryOverviewContainer.propTypes = TimeEntryOverview.propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(TimeEntryOverviewContainer);
