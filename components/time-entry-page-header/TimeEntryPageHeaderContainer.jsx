import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  timeEntriesActiveFilterSelector,
  filterTimeEntries
} from '../../ducks/time-entries';
import { clientNamesSelector } from '../../ducks/clients';
import TimeEntryPageHeader from './TimeEntryPageHeader';

// Select items from your state to place in the props of your component
const mapStateToProps = (state) => ({
  clientNames: clientNamesSelector(state),
  activeFilter: timeEntriesActiveFilterSelector(state)
});

// Dispatch the actioncreators to props of a component
const mapDispatchToProps = (dispatch) => bindActionCreators({
  onFilterTimeEntries: filterTimeEntries
}, dispatch);

const TimeEntryPageHeaderContainer = (props) => (
  <TimeEntryPageHeader {...props} />
);

// Props of parent are equal to props of child
TimeEntryPageHeaderContainer.propTypes = TimeEntryPageHeader.propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(TimeEntryPageHeaderContainer);
