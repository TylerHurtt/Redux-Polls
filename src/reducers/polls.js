import { RECEIVE_POLLS, ADD_POLL } from '../actions/polls';
import { ADD_ANSWER } from '../actions/answers';

export default function polls(state = {}, action) {
  switch (action.type) {
    case RECEIVE_POLLS:
      return { ...state, ...action.polls };
    case ADD_POLL:
      return { ...state, [action.poll.id]: action.poll };
    case ADD_ANSWER:
      const { answer, id, authed } = action;
      const poll = state[id];
      const key = `${answer}Votes`;

      return {
        ...state,
        [id]: {
          ...poll,
          [key]: poll[key].concat([authed]),
        },
      };
    default:
      return state;
  }
}
