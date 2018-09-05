import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  getTeamMembersSelector,
  // isFormSavingSelector,
  // isFormVisibleSelector,
  deleteTeamMember,
  requestTeamMembers,
  saveTeamMember,
  toggleFormVisibility
} from '../../ducks/team-members';
import TeamMemberOverview from './TeamMemberOverview';

// Select items from your state to place in the props of your component
const mapStateToProps = (state) => ({
  teamMembers: getTeamMembersSelector(state)
  // isFormSaving: isFormSavingSelector(state),
  // isFormVisible: isFormVisibleSelector(state)
});

// Dispatch the actioncreators to props of a component
const mapDispatchToProps = (dispatch) => bindActionCreators({
  onDeleteTeamMember: deleteTeamMember,
  // onRequestTeamMembers: requestTeamMembers,
  requestTeamMembers,
  onSaveTeamMember: saveTeamMember,
  onToggleFormVisibility: toggleFormVisibility
}, dispatch);

const TeamMemberOverviewContainer = (props) => (
  <TeamMemberOverview {...props} />
);

// Props of parent are equal to props of child
TeamMemberOverviewContainer.propTypes = TeamMemberOverview.propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(TeamMemberOverviewContainer);
