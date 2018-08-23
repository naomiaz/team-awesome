import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  getTimeEntriesSelector,
  isFormSavingSelector,
  isFormVisibleSelector,
  onDeleteTimeEntry,
  onDeleteTimeEntrySuccess,
  onRequestTimeEntries,
  onRequestTimeEntriesSuccess,
  onSaveTimeEntry,
  onSaveTimeEntrySuccess,
  onToggleFormVisibility
} from '../../ducks/time-entries';
import TimeEntryOverview from './TimeEntryOverview';

// Select items from your state to place in the props of your component
const mapStateToProps = (state) => ({
  timeEntries: getTimeEntriesSelector(state),
  isFormSaving: isFormSavingSelector(state),
  isFormVisible: isFormVisibleSelector(state)
});

// Dispatch the actioncreators to props of a component
const mapDispatchToProps = (dispatch) => bindActionCreators({
  onDeleteTimeEntry,
  onDeleteTimeEntrySuccess,
  onRequestTimeEntries,
  onRequestTimeEntriesSuccess,
  onSaveTimeEntry,
  onSaveTimeEntrySuccess,
  onToggleFormVisibility
}, dispatch);

const TimeEntryOverviewContainer = (props) => (
  <TimeEntryOverview {...props} />
);

// Props of parent are equal to props of child
TimeEntryOverviewContainer.propTypes = TimeEntryOverview.propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(TimeEntryOverviewContainer);
