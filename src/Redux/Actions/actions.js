import axios from "axios";
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
} from "./actions-types";
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

export function orderByName(name) {
  return {
    type: ORDER_BY_NAME,
    payload: name,
  };
}
export function orderByWeight(weight) {
  return {
    type: ORDER_BY_WEIGHT,
    payload: weight,
  };
}

export function clearData() {
  return { type: CLEAR_DATA };
}

export function clearOrders() {
  return { type: CLEAR_ORDERS };
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

export function filterByTemperaments(temps) {
  return {
    type: FILTER_BY_TEMPERAMENTS,
    payload: temps,
  };
}

export function filterByOrigin(origin) {
  return {
    type: FILTER_BY_ORIGIN,
    payload: origin,
  };
}
