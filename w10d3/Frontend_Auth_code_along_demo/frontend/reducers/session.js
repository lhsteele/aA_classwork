import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session';

// setup a default state
// POJO with a key of currentUser and a value of null
// this is what we want to return if there is no currentUser
const _nullSession = {
  currentUser: null, 
};

export default (state=_nullSession, action) => {
  Object.freeze(state);
  switch (action.type) {
    // here we want to return a new state, adding in currentUser as the key, and the user as the value
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, { currentUser: action.user });
    case LOGOUT_CURRENT_USER:
      return _nullSession;
    default:
      return state;
  }
};

