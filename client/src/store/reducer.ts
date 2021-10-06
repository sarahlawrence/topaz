import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
};

export const reducer = createReducer(initialState, (builder) => {
  builder.addDefaultCase((state, action) => state);
});
