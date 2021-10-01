import constants from "./constants";

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
