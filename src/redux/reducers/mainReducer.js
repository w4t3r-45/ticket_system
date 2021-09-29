import constants from "../actions/constants";

const INIT_STATE = {
  test: "hello this is initial state",
  theme: "rallyLight"
};

export const mainReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case constants.TEST:
      console.log("hello from redux");
    default:
      return state;
  }
};
