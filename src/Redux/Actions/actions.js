import axios from "axios";
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
  POST,
  RESET,
} from "./actions-types";
const URL = "http://localhost:3001";

export function getDogs() {
  return async function (dispatch) {
    dispatch({
      type: LOADING,
    });

    const { data } = await axios(`${URL}/dogs`);
    return dispatch({
      type: GET_DOGS,
      payload: data,
    });
  };
}

export function getDogsID(id) {
  return async function (dispatch) {
    try {
      dispatch({
        type: LOADING,
      });

      const { data } = await axios(`${URL}/dogs/${id}`);
      return dispatch({
        type: GET_BY_ID,
        payload: data,
      });
    } catch (error) {
      return dispatch({
        type: "ERROR",
        payload: error.response.data,
      });
    }
  };
}

export function getByName(name) {
  return async function (dispatch) {
    try {
      dispatch({
        type: LOADING,
      });
      const { data } = await axios(`${URL}/name?name=${name}`);

      return dispatch({
        type: GET_BY_NAME,
        payload: data,
      });
    } catch (error) {
      return dispatch({
        type: "ERROR",
        payload: error.response.data,
      });
    }
  };
}

export function postDog(dog) {
  return async function (dispatch) {
    try {
      const { data } = await axios.post(`${URL}/dogs`, dog);

      dispatch({
        type: LOADING,
      });

      return dispatch({
        type: POST,
        payload: data,
      });
    } catch (error) {
      console.log(error);

      return dispatch({
        type: "Error",
        payload: error.response.data,
      });
    }
  };
}

export function getTemperaments() {
  return async function (dispatch) {
    const { data } = await axios(`${URL}/temperaments`);
    return dispatch({
      type: GET_TEMPERAMENTS,
      payload: data,
    });
  };
}

export function orderByName(name) {
  return (dispatch) => {
    dispatch({
      type: LOADING,
    });

    dispatch({
      type: ORDER_BY_NAME,
      payload: name,
    });
  };
}
export function orderByWeight(weight) {
  return (dispatch) => {
    dispatch({
      type: LOADING,
    });

    dispatch({
      type: ORDER_BY_WEIGHT,
      payload: weight,
    });
  };
}

export function filterByTemperaments(temps) {
  return (dispatch) => {
    dispatch({
      type: LOADING,
    });

    dispatch({
      type: FILTER_BY_TEMPERAMENTS,
      payload: temps,
    });
  };
}

export function filterByOrigin(origin) {
  return (dispatch) => {
    dispatch({
      type: LOADING,
    });

    dispatch({
      type: FILTER_BY_ORIGIN,
      payload: origin,
    });
  };
}

export function clearData() {
  return (dispatch) => {
    dispatch({
      type: CLEAR_DATA,
    });
  };
}

export function resetFilter() {
  return (dispatch) => {
    dispatch({
      type: RESET,
    });
  };
}
