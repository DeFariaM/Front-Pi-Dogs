import { GET_USERS } from "../Actions/actions";

let initialState = {
  allUsers: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USERS:
      return { ...state, allUsers: payload };

    default:
      return { ...state };
  }
};

export default rootReducer;
