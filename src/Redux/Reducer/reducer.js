import {
  CLEAR_DATA,
  GET_BY_ID,
  GET_BY_NAME,
  GET_DOGS,
} from "../Actions/actions-types";

let initialState = {
  allDogs: [],
  copyDogs: [],
  detailDog: [],
  searchDogs: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_DOGS:
      return { ...state, allDogs: payload, copyDogs: payload };

    case GET_BY_ID:
      return { ...state, detailDog: payload };

    case CLEAR_DATA:
      return { ...state, detailDog: [] };

    case GET_BY_NAME:
      return { ...state, allDogs: payload };
    default:
      return { ...state };
  }
};

export default rootReducer;
