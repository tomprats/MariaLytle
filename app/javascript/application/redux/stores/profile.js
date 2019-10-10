import {
  UPDATE_PROFILE
} from "application/redux/actions/profile";

export default (
  state = null,
  action
) => {
  switch(action.type) {
    case UPDATE_PROFILE:
      return action.profile
        ? {...action.profile}
        : null;
    default:
      return state;
  }
};
