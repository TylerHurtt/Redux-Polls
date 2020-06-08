export const RECEIVE_USERS = 'RECEIVE_USERS';
export const ADD_POLL = 'ADD_POLL';

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}

export function addPoll(poll) {
  return {
    type: ADD_POLL,
    poll,
  };
}
