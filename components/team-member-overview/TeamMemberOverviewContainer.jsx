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
import TeamMemberOverview from './TeamMemberOverview';

const mapStateToProps = (state) => ({
  teamMembers: getTeamMembersSelector(state),
  sortBy: teamMembersSortBySelector(state),
  sortDirection: teamMembersSortDirectionSelector(state)
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  onRequestTeamMembers: requestTeamMembers,
  onSaveTeamMember: saveTeamMember,
  onSortTeamMembersBy: sortTeamMembersBy,
  onSortTeamMembersDirection: sortTeamMembersDirection
}, dispatch);

const TeamMemberOverviewContainer = (props) => (
  <TeamMemberOverview {...props} />
);

TeamMemberOverviewContainer.propTypes = TeamMemberOverview.propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(TeamMemberOverviewContainer);
