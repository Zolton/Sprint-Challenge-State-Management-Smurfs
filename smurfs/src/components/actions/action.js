import axios from "axios";
export const FETCH_SMURFS = "FETCH_SMURFS";
export const GET_SMURF_SUCCESS = "GET_SMURF_SUCCESS";
export const GET_SMURF_FAIL = "GET_SMURF_FAIL";
export const POST_SMURF = "POST_SMURF";

export const GET_SMURF = () => dispatch => {
  dispatch({ type: FETCH_SMURFS });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      console.log(res);
      dispatch({
        type: GET_SMURF_SUCCESS,
        payload: res.data
      });
    })
    .catch(rej => {
      console.log(rej);
      dispatch({
        type: GET_SMURF_FAIL,
        payload: rej.response
      });
    });
};
