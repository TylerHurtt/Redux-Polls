import { combineReducers } from 'redux';
import authed from './authed';
import users from './users';
import polls from './polls';

export default combineReducers({ authed, users, polls });
