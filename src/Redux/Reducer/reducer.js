import {
  CLEAR_DATA,
  FILTER_BY_ORIGIN,
  FILTER_BY_TEMPERAMENTS,
  GET_BY_ID,
  GET_BY_NAME,
  GET_DOGS,
  GET_TEMPERAMENTS,
  LOADING,
  ORDER_BY_NAME,
  ORDER_BY_WEIGHT,
  RESET,
} from "../Actions/actions-types";

let initialState = {
  allDogs: [],
  copyDogs: [],
  detailDog: [],
  temperaments: [],
  loading: false,
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_DOGS:
      return { ...state, allDogs: payload, copyDogs: payload, loading: false };

    case GET_BY_ID:
      return { ...state, detailDog: payload, loading: false };

    case CLEAR_DATA:
      return { ...state, detailDog: [] };

    case GET_BY_NAME:
      return { ...state, allDogs: payload, loading: false };

    case ORDER_BY_NAME:
      let copy = [...state.allDogs];
      copy = copy.sort((a, b) => {
        let nameA = a.name.toLowerCase();
        let nameB = b.name.toLowerCase();
        if (payload === "ASC") {
          if (nameA > nameB) return 1;
          if (nameA < nameB) return -1;
          return 0;
        } else {
          if (nameA < nameB) return 1;
          if (nameA > nameB) return -1;
          return 0;
        }
      });
      return { ...state, allDogs: copy, loading: false };

    case ORDER_BY_WEIGHT:
      let copyW = [...state.allDogs];
      copyW = copyW.sort((a, b) => {
        if (payload === "Lighter") {
          return a.weight_min - b.weight_min;
        }
        return b.weight_min - a.weight_min;
      });
      return { ...state, allDogs: copyW, loading: false };

    case GET_TEMPERAMENTS:
      return { ...state, temperaments: payload };

    case FILTER_BY_TEMPERAMENTS:
      let copyT = [...state.copyDogs];
      if (payload === "All") {
        return { ...state, allDogs: state.copyDogs, loading: false };
      }
      copyT = copyT.filter((t) => t.Temperaments.includes(payload));
      return { ...state, allDogs: copyT, loading: false };

    case FILTER_BY_ORIGIN:
      let copyO = [...state.copyDogs];
      if (payload === "DB") {
        const filterDB = copyO.filter((dog) => dog.created === true);
        return { ...state, allDogs: filterDB, loading: false };
      } else if (payload === "API") {
        const filterAPI = copyO.filter((dog) => dog.created === false);
        return { ...state, allDogs: filterAPI, loading: false };
      } else {
        return { ...state, allDogs: state.copyDogs, loading: false };
      }

    case LOADING:
      return { ...state, loading: true };

    case RESET:
      return { ...state, allDogs: state.copyDogs };

    default:
      return { ...state };
  }
};

export default rootReducer;
