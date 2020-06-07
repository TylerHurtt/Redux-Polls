import { combineReducers } from 'redux';
import authed from './authed';
import users from './users';
import polls from './polls';
import { loadingBarReducer as loadingBar } from 'react-redux-loading';

export default combineReducers({
  authed,
  users,
  polls,
  loadingBar,
});
