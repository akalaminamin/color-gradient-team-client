import {
  GET_GRADIENTS,
  CREATE_GRADIENT,
  UPDATE_GRADIENT,
  REMOVE_GRADIENT,
  DELETE_GRADIENT,
  SET_GRADIENT,
  DOWNLOAD_GRADIENT,
} from "../constants/type";
import axios from "axios";

// get All gradient
export const getGradient = () => async (dispatch) => {
  const result = await axios.get(`http://localhost:5000/gradients`);
  dispatch({
    type: GET_GRADIENTS,
    payload: result.data,
  });
};

// download gradient
export const downloadGradient = (gradientName) => async (dispatch) => {
  window.open(`http://localhost:5000/gradients/downloads/${gradientName}`);
  dispatch({
    type: DOWNLOAD_GRADIENT,
    payload: gradientName,
  });
};

// set gradient
export const setGradient = (gradient) => ({
  type: SET_GRADIENT,
  payload: gradient,
});

// remove gradient
export const removeGradient = () => ({
  type: REMOVE_GRADIENT,
});

// create gradient
export const createGradient = (gradient) => async (dispatch) => {
  const result = await axios.post(`http://localhost:5000/gradients`, gradient);
  dispatch({
    type: CREATE_GRADIENT,
    payload: result.data,
  });
};

// delete gradient
export const deleteGradient = (id) => async (dispatch) => {
  await axios.delete(`http://localhost:5000/gradients/${id}`);
  dispatch({
    type: DELETE_GRADIENT,
    payload: id,
  });
};

// update gradient
export const updateGradient =(gradient) => async dispatch =>{
  const result = await axios.put(`http://localhost:5000/gradients/${gradient._id}`)
  dispatch({
    type:UPDATE_GRADIENT,
    payload:result.data
  })
}
