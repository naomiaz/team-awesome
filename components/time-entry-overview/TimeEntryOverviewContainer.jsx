import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  getTimeEntriesSelector,
  isFormSavingSelector,
  isFormVisibleSelector,
  deleteTimeEntry,
  filterTimeEntries,
  requestTimeEntries,
  saveTimeEntry,
  timeEntriesSelector,
  timeEntriesActiveFilterSelector,
  toggleFormVisibility
} from '../../ducks/time-entries';
import { clientNamesSelector, requestClients } from '../../ducks/clients';
import TimeEntryOverview from './TimeEntryOverview';

const mapStateToProps = (state) => ({
  activeFilter: timeEntriesActiveFilterSelector(state),
  clientNames: clientNamesSelector(state),
  timeEntries: getTimeEntriesSelector(state),
  timeEntriesUnfiltered: timeEntriesSelector(state),
  isFormSaving: isFormSavingSelector(state),
  isFormVisible: isFormVisibleSelector(state)
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  onDeleteTimeEntry: deleteTimeEntry,
  onFilterTimeEntries: filterTimeEntries,
  onRequestClients: requestClients,
  onRequestTimeEntries: requestTimeEntries,
  onSaveTimeEntry: saveTimeEntry,
  onToggleFormVisibility: toggleFormVisibility
}, dispatch);

const TimeEntryOverviewContainer = (props) => (
  <TimeEntryOverview {...props} />
);

TimeEntryOverviewContainer.propTypes = TimeEntryOverview.propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(TimeEntryOverviewContainer);
