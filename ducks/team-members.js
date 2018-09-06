// Action types
export const REQUEST_TEAM_MEMBERS = 'REQUEST_TEAM_MEMBERS';
export const REQUEST_TEAM_MEMBERS_SUCCESS = 'REQUEST_TEAM_MEMBERS_SUCCESS';
export const SAVE_TEAM_MEMBER = 'SAVE_TEAM_MEMBER';
export const SAVE_TEAM_MEMBER_SUCCESS = 'SAVE_TEAM_MEMBER_SUCESS';
export const DELETE_TEAM_MEMBER = 'DELETE_TEAM_MEMBER';
export const DELETE_TEAM_MEMBER_SUCCESS = 'DELETE_TEAM_MEMBER_SUCCESS';
// export const SET_FORM_VISIBILITY = 'SET_FORM_VISIBILITY';


// State Selectors -> To be imported in Container Component
export const getTeamMembersSelector = (state) => state.teamMembers.members;
  //.sort((a, b) => (new Date(b.date) - new Date(a.date)));
export const isFormSavingSelector = (state) => state.teamMembers.isFormSaving;
// export const isFormVisibleSelector = (state) => state.timeEntries.isFormVisible;


// Initial State
export const initialState = {
  members: [],
  isLoading: false,
  isFormSaving: false,
  error: null
};


// Action Reducers
export function teamMembersReducer(state = initialState, action) {
  switch (action.type) {
    case DELETE_TEAM_MEMBER:
      return { ...state, isFormSaving: true };
    case DELETE_TEAM_MEMBER_SUCCESS:
      return {
        ...state,
        isFormSaving: false,
        members: state.members.filter((member) => member.id !== action.id)
      };
    case REQUEST_TEAM_MEMBERS:
      return { ...state, isLoading: true };
    case REQUEST_TEAM_MEMBERS_SUCCESS:
      return { ...state, isLoading: false, members: action.teamMembers };
    case SAVE_TEAM_MEMBER:
      return { ...state, isFormSaving: true };
    case SAVE_TEAM_MEMBER_SUCCESS:
      return { ...state, isFormSaving: false, members: [action.newMember, ...state.members] };
    default:
      return state;
  }
}


// Action Creators -> To be called in Component (and are watched by rootSaga)
export const deleteTeamMember = (id) => ({
  type: DELETE_TEAM_MEMBER,
  id
});
export const deleteTeamMemberSuccess = (id) => ({
  type: DELETE_TEAM_MEMBER_SUCCESS,
  id
});

export const requestTeamMembers = () => ({ type: REQUEST_TEAM_MEMBERS });
export const requestTeamMembersSuccess = (teamMembers) => ({
  type: REQUEST_TEAM_MEMBERS_SUCCESS,
  teamMembers
});

export const saveTeamMember = (newTeamMember) => ({
  type: SAVE_TEAM_MEMBER,
  newTeamMember
});
export const saveTeamMemberSuccess = (newMember) => ({
  type: SAVE_TEAM_MEMBER_SUCCESS,
  newMember
});
