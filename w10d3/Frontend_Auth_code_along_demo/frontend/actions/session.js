import { postUser, postSession, deleteSession } from '../utils/session';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";

// receive our current user
const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

// logging the user out 
const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});


// named based on the action it performs
// formUser is a User object coming from form
export const createNewUser = formUser => dispatch => postUser(formUser)
  .then(user => dispatch(receiveCurrentUser(user)));

export const login = formUser => dispatch => postSession(fromUser)
  .then(user => dispatch(receiveCurrentUser(user)));

export const logout = () => dispatch => deleteSession()
  .then(() => dispatch(logoutCurrentUser()));



  

