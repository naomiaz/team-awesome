import { createSelector } from 'reselect';


// Action types
export const REQUEST_TEAM_MEMBERS = 'REQUEST_TEAM_MEMBERS';
export const REQUEST_TEAM_MEMBERS_SUCCESS = 'REQUEST_TEAM_MEMBERS_SUCCESS';
export const SAVE_TEAM_MEMBER = 'SAVE_TEAM_MEMBER';
export const SAVE_TEAM_MEMBER_SUCCESS = 'SAVE_TEAM_MEMBER_SUCCESS';
export const SORT_TEAM_MEMBERS_BY = 'SORT_TEAM_MEMBERS_BY';
export const SORT_TEAM_MEMBERS_DIRECTION = 'SORT_TEAM_MEMBERS_DIRECTION';
export const DELETE_TEAM_MEMBER = 'DELETE_TEAM_MEMBER';
export const DELETE_TEAM_MEMBER_SUCCESS = 'DELETE_TEAM_MEMBER_SUCCESS';


// State Selectors
const teamMembersRootSelector = (state) => state.teamMembers;

const teamMembersSelector = createSelector(
  teamMembersRootSelector,
  (teamMembers) => teamMembers.members
);

export const teamMembersSortBySelector = createSelector(
  teamMembersRootSelector,
  (teamMembers) => teamMembers.sortBy
);

export const teamMembersSortDirectionSelector = createSelector(
  teamMembersRootSelector,
  (teamMembers) => teamMembers.sortDirection
);

export const getTeamMembersSelector = createSelector(
  [teamMembersSelector, teamMembersSortBySelector, teamMembersSortDirectionSelector],
  (teamMembers, sortBy, sortDirection) => (
    !sortBy
      ? teamMembers
      : [...teamMembers].sort((a, b) => {
        const memberA = a[sortBy].toUpperCase();
        const memberB = b[sortBy].toUpperCase();
        if (memberA < memberB) { return sortDirection === 'ascending' ? -1 : 1; }
        if (memberA > memberB) { return sortDirection === 'ascending' ? 1 : -1; }
        return 0;
      })
  )
);

export const isFormSavingSelector = (state) => state.teamMembers.isFormSaving;


// Initial State
export const initialState = {
  members: [],
  isLoading: false,
  isFormSaving: false,
  sortBy: '',
  sortDirection: 'ascending',
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
    case SORT_TEAM_MEMBERS_BY:
      return { ...state, sortBy: action.sortBy };
    case SORT_TEAM_MEMBERS_DIRECTION:
      return { ...state, sortDirection: action.sortDirection };
    default:
      return state;
  }
}


// Action Creators
export const deleteTeamMember = (id) => ({
  type: DELETE_TEAM_MEMBER,
  id
});

export const deleteTeamMemberSuccess = (id) => ({
  type: DELETE_TEAM_MEMBER_SUCCESS,
  id
});

export const sortTeamMembersBy = (sortBy) => ({
  type: SORT_TEAM_MEMBERS_BY,
  sortBy
});
export const sortTeamMembersDirection = (sortDirection) => ({
  type: SORT_TEAM_MEMBERS_DIRECTION,
  sortDirection
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
