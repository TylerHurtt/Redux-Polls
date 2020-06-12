import { savePollAnswer } from '../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading';

export const ADD_ANSWER = 'ADD_ANSWER';

function addAnswer({ authed, id, answer }) {
  return {
    type: ADD_ANSWER,
    authed,
    id,
    answer,
  };
}

export function handleAddAnswer(answerData) {
  return (dispatch) => {
    dispatch(showLoading());
    return savePollAnswer(answerData)
      .then(() => dispatch(addAnswer(answerData)))
      .then(() => dispatch(hideLoading()));
  };
}
