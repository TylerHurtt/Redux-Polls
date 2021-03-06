import { savePoll } from '../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading';
export const RECEIVE_POLLS = 'RECEIVE_POLLS';
export const ADD_POLL = 'ADD_POLL';

export function receivePolls(polls) {
  return {
    type: RECEIVE_POLLS,
    polls,
  };
}

function addPoll(poll) {
  return {
    type: ADD_POLL,
    poll,
  };
}

export function handleAddPoll(poll) {
  return (dispatch, getState) => {
    const { authed } = getState();
    dispatch(showLoading());
    return savePoll({
      ...poll,
      author: authed,
    })
      .then((poll) => dispatch(addPoll(poll)))
      .then(() => dispatch(hideLoading()));
  };
}
