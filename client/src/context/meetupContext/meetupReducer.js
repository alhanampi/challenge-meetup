import { ADD_MEETUP, GET_MEETUPS, MEETUP_ERROR } from "../types";

export default (state, { type, payload }) => {
  switch (type) {
    case GET_MEETUPS:
      return {
        ...state,
        meetups: payload,
        error: null,
      };
    case ADD_MEETUP:
      return {
        ...state,
        meetups: [...state.meetups, payload],
      };
    case MEETUP_ERROR:
      return {
        ...state,
        meetups: [],
        error: payload,
      };
    default:
      return state;
  }
};
