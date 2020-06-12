import { RECEIVE_USERS } from '../actions/users';
import { ADD_POLL } from '../actions/polls';
import { ADD_ANSWER } from '../actions/answers';

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return { ...state, ...action.users };
    case ADD_POLL:
      const { author, id } = this.props;
      return {
        ...state,
        [author]: {
          ...state[author],
          polls: state[author].polls.concat([id]),
        },
      };
    case ADD_ANSWER:
      const { authed } = action;
      const pid = action.id;

      const user = state[authed];

      return {
        ...state,
        [authed]: {
          ...user,
          answers: user.answers.concat([pid]),
        },
      };
    default:
      return state;
  }
}
