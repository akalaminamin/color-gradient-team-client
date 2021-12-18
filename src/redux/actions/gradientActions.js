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
  const result = await axios.get(`https://mern-color-gradient.herokuapp.com/gradients`);
  dispatch({
    type: GET_GRADIENTS,
    payload: result.data,
  });
};

// download gradient
export const downloadGradient = (gradientName) => async (dispatch) => {
  window.open(`https://mern-color-gradient.herokuapp.com/gradients/downloads/${gradientName}`);
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
  const result = await axios.post(`https://mern-color-gradient.herokuapp.com/gradients`, gradient);
  dispatch({
    type: CREATE_GRADIENT,
    payload: result.data,
  });
};

// delete gradient
export const deleteGradient = (id) => async (dispatch) => {
  await axios.delete(`https://mern-color-gradient.herokuapp.com/gradients/${id}`);
  dispatch({
    type: DELETE_GRADIENT,
    payload: id,
  });
};

// update gradient
export const updateGradient =(gradient) => async dispatch =>{
  const result = await axios.put(`https://mern-color-gradient.herokuapp.com/gradients/${gradient._id}`)
  dispatch({
    type:UPDATE_GRADIENT,
    payload:result.data
  })
}
