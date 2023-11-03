import axios from "axios";

export const GET_USERS = "GET_USERS";

export function getUsers() {
  return async function (dispatch) {
    const { data } = await axios("http://localhost:3001/dogs");
    try {
      return dispatch({
        type: GET_USERS,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}
