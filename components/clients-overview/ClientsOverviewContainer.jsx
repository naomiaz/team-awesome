import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  getTeamMembersSelector,
  requestTeamMembers,
  saveTeamMember,
  sortTeamMembersBy,
  sortTeamMembersDirection,
  teamMembersSortBySelector,
  teamMembersSortDirectionSelector
} from '../../ducks/team-members';
import ClientsOverview from './ClientsOverview';

// Select items from your state to place in the props of your component
const mapStateToProps = (state) => ({
  teamMembers: getTeamMembersSelector(state),
  sortBy: teamMembersSortBySelector(state),
  sortDirection: teamMembersSortDirectionSelector(state)
});

// Dispatch the actioncreators to props of a component
const mapDispatchToProps = (dispatch) => bindActionCreators({
  onRequestTeamMembers: requestTeamMembers,
  onSaveTeamMember: saveTeamMember,
  onSortTeamMembersBy: sortTeamMembersBy,
  onSortTeamMembersDirection: sortTeamMembersDirection
}, dispatch);

const ClientsOverviewContainer = (props) => (
  <ClientsOverview {...props} />
);

// Props of parent are equal to props of child
ClientsOverviewContainer.propTypes = ClientsOverview.propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(ClientsOverviewContainer);
