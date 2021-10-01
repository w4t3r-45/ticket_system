import constants from "../actions/constants";

const INIT_STATE = {
  test: "hello this is initial state",
  theme: "rallyLight",
  openTkt: false
};

export const mainReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case constants.TEST:
      console.log("hello from redux");
    case constants.OPEN_NEW_TICKET:
      return {
        ...state,
        openTkt: true
      };
    case constants.CLOSE_NEW_TICKET:
      return {
        ...state,
        openTkt: false
      };
    default:
      return state;
  }
};
