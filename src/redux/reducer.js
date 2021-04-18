import { combineReducers } from "redux";

function uptimes(state = {}, action) {
  switch (action.type) {
    case "SET_UPTIME":
      return {
        ...state,
        [action.payload.data.domain]: action.payload.data
      };
    default:
      return state;
  }
}
function domains(
  state = {
    domains: ["passfoo.com", "failxx.com", "salesforce.com", "gmail.com"]
  },
  action
) {
  switch (action.type) {
    case "ADD_DOMAIN":
      return {
        ...state,
        domains: [...state.domains, action.payload.domain]
      };
    default:
      return state;
  }
}
export default combineReducers({
  uptimes,
  domains
});
