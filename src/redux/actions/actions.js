import constants from "./constants";

export const test = (data) => {
  return {
    type: constants.TEST,
    payload: data
  };
};
