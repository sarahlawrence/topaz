import { createReducer, createAction } from "@reduxjs/toolkit";

const initialState = {
  current: "",
};

const setProfile = createAction<string>("set_profile");
export const profileReducer = createReducer(initialState, (builder) => {
  builder.addCase(setProfile, (state, action) => {
    state.current = action.payload;
  });
  builder.addDefaultCase((state, action) => state);
});
