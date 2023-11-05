import {
  CLEAR_DATA,
  CLEAR_ORDERS,
  FILTER_BY_ORIGIN,
  FILTER_BY_TEMPERAMENTS,
  GET_BY_ID,
  GET_BY_NAME,
  GET_DOGS,
  GET_TEMPERAMENTS,
  ORDER_BY_NAME,
  ORDER_BY_WEIGHT,
} from "../Actions/actions-types";

let initialState = {
  allDogs: [],
  copyDogs: [],
  detailDog: [],
  searchDogs: [],
  temperaments: [],
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

    case ORDER_BY_NAME:
      let copy = state.allDogs;
      copy = copy.sort((a, b) => {
        if (payload === "ASC") {
          if (a.name > b.name) return 1;
          if (a.name < b.name) return -1;
          return 0;
        } else {
          if (a.name < b.name) return 1;
          if (a.name > b.name) return -1;
          return 0;
        }
      });
      return { ...state, allDogs: copy };

    case ORDER_BY_WEIGHT:
      let copyW = state.allDogs;
      copyW = copyW.sort((a, b) => {
        if (payload === "Lighter") {
          return a.weight_min - b.weight_min;
        }
        return b.weight_min - a.weight_min;
      });
      return { ...state, allDogs: copyW };

    case GET_TEMPERAMENTS:
      return { ...state, temperaments: payload };

    case FILTER_BY_TEMPERAMENTS:
      let copyT = state.copyDogs;
      copyT = copyT.filter((t) => t.Temperaments.includes(payload));
      return { ...state, allDogs: copyT };

    case FILTER_BY_ORIGIN:
      let copyO = state.copyDogs;
      if (payload === "DB") {
        const filterDB = copyO.filter((dog) => dog.created === true);
        return { ...state, allDogs: filterDB };
      } else if (payload === "API") {
        const filterAPI = copyO.filter((dog) => dog.created === false);
        return { ...state, allDogs: filterAPI };
      } else {
        return { ...state, allDogs: state.copyDogs };
      }

    case CLEAR_ORDERS:
      return { ...state, allDogs: state.copyDogs };
    default:
      return { ...state };
  }
};

export default rootReducer;
