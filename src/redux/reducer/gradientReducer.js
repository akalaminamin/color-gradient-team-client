import {
  GET_GRADIENTS,
  CREATE_GRADIENT,
  UPDATE_GRADIENT,
  REMOVE_GRADIENT,
  DELETE_GRADIENT,
  SET_GRADIENT,
  DOWNLOAD_GRADIENT,
} from "../constants/type";

const intialState = {
  gradients: [],
  gradient: null,
};

export default (state = intialState, { type, payload }) => {
  switch (type) {
    case GET_GRADIENTS:
      return {
        ...state,
        gradients: payload,
      };
    case DOWNLOAD_GRADIENT:
      return {
        ...state,
        gradients: state.gradients.map((gradient) =>
          gradient.name === payload
            ? Object.assign(gradient, { downloads: gradient.downloads + 1 })
            : gradient
        ),
      };
    case SET_GRADIENT:
      return {
        ...state,
        gradient: payload,
      };
    case REMOVE_GRADIENT:
      return {
        ...state,
        gradient: null,
      };
    case CREATE_GRADIENT:
      return {
        ...state,
        gradients: [payload, ...state.gradients],
      };
    case DELETE_GRADIENT:
      return {
        ...state,
        gradients: state.gradients.filter(
          (gradient) => gradient._id !== payload
        ),
      };
    case UPDATE_GRADIENT:
      return {
        ...state,
        gradients: state.gradients.filter((gradient) =>
          gradient._id === payload._id ? payload : gradient
        ),
      };
    default:
      return state;
  }
};
