// Constants
import { ACTION_TYPES } from "./constants";

export const initialState = {
  applications: {},
};

export const Reducers = (previousState, action) => {
  switch (action.type) {
    case ACTION_TYPES.APPLICATIONS:
      return {
        ...previousState,
        applications: action.payload,
      };

    default:
      return previousState;
  }
};
