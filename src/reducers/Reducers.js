// Constants
import { ACTION_TYPES } from "./constants";

export const initialState = {
  application: {},
  applications: [],
};

export const Reducers = (previousState, action) => {
  switch (action.type) {
    case ACTION_TYPES.APPLICATION:
      return {
        ...previousState,
        application: action.payload,
      };

    case ACTION_TYPES.APPLICATIONS:
      return {
        ...previousState,
        applications: action.payload,
      };

    default:
      return previousState;
  }
};
