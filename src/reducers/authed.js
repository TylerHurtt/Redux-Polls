import { SET_AUTHED_USER } from '../actions/authed';

export default function authed(state = null, action) {
  switch (action.type) {
    case SET_AUTHED_USER:
      return action.id;
    default:
      return state;
  }
}
