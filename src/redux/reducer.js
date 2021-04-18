import { combineReducers } from "redux";

function uptimes(action = {}, state) {
  switch (state.type) {
    case "SET_UPTIME":
      return {
        ...action,
        [state.payload.data.domain]: state.payload.data
      };
    case "ADD_DOMAIN":
      return {
        ...action,
        domains: [...state.domains, state.payload.domain]
      };
    default:
      return action;
  }
}

export default combineReducers({
  uptimes
});
