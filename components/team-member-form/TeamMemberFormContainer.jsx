import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { isFormSavingSelector, saveTeamMember } from '../../ducks/team-members';
import TeamMemberForm from './TeamMemberForm';

// Select items from your state to place in the props of your component
const mapStateToProps = (state) => ({
  isFormSaving: isFormSavingSelector(state)
});

// Dispatch the actioncreators to props of a component
const mapDispatchToProps = (dispatch) => bindActionCreators({
  onSaveTeamMember: saveTeamMember
}, dispatch);

const TeamMemberFormContainer = (props) => (
  <TeamMemberForm {...props} />
);

// Props of parent are equal to props of child
TeamMemberFormContainer.propTypes = TeamMemberForm.propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(TeamMemberFormContainer);
