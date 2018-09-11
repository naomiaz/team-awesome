import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  filterTimeEntries
} from '../../ducks/time-entries';
import PageHeader from './PageHeader';

// Dispatch the actioncreators to props of a component
const mapDispatchToProps = (dispatch) => bindActionCreators({
  onFilterTimeEntries: filterTimeEntries
}, dispatch);

const PageHeaderContainer = (props) => (
  <PageHeader {...props} />
);

// Props of parent are equal to props of child
PageHeaderContainer.propTypes = PageHeader.propTypes;

export default connect(mapDispatchToProps)(PageHeaderContainer);
