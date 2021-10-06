import constants from "./constants";
import { Auth } from "aws-amplify";

export const test = (data) => {
  return {
    type: constants.TEST,
    payload: data
  };
};

export const openNewTicket = () => {
  return {
    type: constants.OPEN_NEW_TICKET
  };
};

export const closeNewTicket = () => {
  return {
    type: constants.CLOSE_NEW_TICKET
  };
};

export const firstLoginRedirect = (data) => {
  return {
    type: constants.FIRST_LOGIN_REDIRECT,
    payload: data
  };
};

// Middlewares
export const firstLoginReset = (data) => async (dispatch, getState) => {
  console.log(data);
  Auth.completeNewPassword(data.user, data.data.password)
    .then((user) => {
      console.log("logged success we must dispatch LOGIN_SUCCESS", user);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const loginRequest = (data) => async (dispatch, getState) => {
  try {
    const response = await Auth.signIn(data.email, data.password);
    if (response.challengeName === "NEW_PASSWORD_REQUIRED") {
      dispatch(firstLoginRedirect(response));
    } else {
      console.log("not first log in");
      //we will dispatch login success
    }
    console.log("login success from redux", response);
  } catch (error) {
    console.log(error);
  }
};
