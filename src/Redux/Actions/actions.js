import axios from "axios";
import { CLEAR_DATA, GET_BY_ID, GET_BY_NAME, GET_DOGS } from "./actions-types";
const URL = "http://localhost:3001";

export function getDogs() {
  return async function (dispatch) {
    const { data } = await axios(`${URL}/dogs`);

    return dispatch({
      type: GET_DOGS,
      payload: data,
    });
  };
}

export function getDogsID(id) {
  return async function (dispatch) {
    const { data } = await axios(`${URL}/dogs/${id}`);

    return dispatch({
      type: GET_BY_ID,
      payload: data,
    });
  };
}

export function getByName(name) {
  return async function (dispatch) {
    const { data } = await axios(`${URL}/name?name=${name}`);

    return dispatch({
      type: GET_BY_NAME,
      payload: data,
    });
  };
}

export function clearData() {
  return async function (dispatch) {
    return dispatch({ type: CLEAR_DATA });
  };
}
