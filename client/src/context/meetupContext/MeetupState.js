import React, { useReducer } from "react";
import axios from "axios";
import MeetupContext from "./meetupContext";
import meetupReducer from "./meetupReducer";
import { ADD_MEETUP, GET_MEETUPS, MEETUP_ERROR, SET_ERROR } from "../types";

const MeetupState = (props) => {
  const initialState = {
    meetups: [],
    error: null,
  };

  const [state, dispatch] = useReducer(meetupReducer, initialState);

  //get all
  const getMeetups = async () => {
    try {
      const res = await axios.get("/api/meetups");
      dispatch({
        type: GET_MEETUPS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: MEETUP_ERROR,
        payload: err.response.msg,
      });
    }
  };

  //post new meetup
  const addMeetup = async (meetupData) => {
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post("/api/meetups/post", meetupData, config);
      dispatch({
        type: ADD_MEETUP,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: MEETUP_ERROR,
        payload: error.response.data.error,
      });
    }
  };

  //error:
  const meetupError = (error) => {
    dispatch({
      type: SET_ERROR,
      payload: [{ msg: error }],
    });
  };

  return (
    <MeetupContext.Provider
      value={{
        meetup: state.meetup,
        error: state.error,
        getMeetups,
        addMeetup,
        meetupError,
      }}
    >
      {props.children}
    </MeetupContext.Provider>
  );
};

export default MeetupState;
