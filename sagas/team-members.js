import { put, takeEvery } from 'redux-saga/effects';
import { getTeamMembers, postTeamMember, deleteTeamMember } from '../services/team-awesome-api/api';
import {
  DELETE_TEAM_MEMBER,
  deleteTeamMemberSuccess,
  REQUEST_TEAM_MEMBERS,
  REQUEST_TEAM_MEMBERS_SUCCESS,
  requestTeamMembersSuccess,
  SAVE_TEAM_MEMBER,
  saveTeamMemberSuccess
} from '../ducks/team-members';

// Generator functions
export function* requestTeamMembersGenerator() {
  const teamMembers = yield getTeamMembers();
  yield put({ type: REQUEST_TEAM_MEMBERS_SUCCESS, teamMembers });
  // yield put(requestTeamMembersSuccess(teamMembers));
}

export function* saveTeamMemberGenerator({ newTeamMember }) {
  const newMember = yield postTeamMember(newTeamMember);
  yield put(saveTeamMemberSuccess(newMember));
}

export function* deleteTeamMemberGenerator({ id }) {
  yield deleteTeamMember(id);
  yield put(deleteTeamMemberSuccess(id));
}

// Watcher functions
export function* watchTeamMembers() {
  // takeEvery listens for dispatched actions and then runs generator functions
  yield takeEvery(DELETE_TEAM_MEMBER, deleteTeamMemberGenerator);
  yield takeEvery(REQUEST_TEAM_MEMBERS, requestTeamMembersGenerator);
  yield takeEvery(SAVE_TEAM_MEMBER, saveTeamMemberGenerator);
}
