import {
    signup, login, logout
  } from '../util/session_api_util';
  
  export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
  export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
  export const RECEIVE_ERROR = "RECEIVE_ERROR";
  export const CLEAR_ERRORS = "CLEAR_ERRORS";

  const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
  });
  
  const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
  });
  
  const receiveErrors = (errors) => ({
    type: RECEIVE_ERROR,
    errors
  });

  

  // this takes an array
  
  export const createNewUser = formUser => dispatch => signup(formUser)
    .then(user => dispatch(receiveCurrentUser(user)),
    errors => dispatch(receiveErrors(errors))
    );
  
  export const loginUser = formUser => dispatch => login(formUser)
    .then(user => dispatch(receiveCurrentUser(user)),
    errors => dispatch(receiveErrors(errors))
    );
  
  export const logoutUser = () => dispatch => logout()
    .then(() => dispatch(logoutCurrentUser()),
    errors => dispatch(receiveErrors(errors))
    );

  export const clearErrors = () => ({
      type: CLEAR_ERRORS
  });
