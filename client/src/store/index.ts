import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { profileApi } from "./getProfile";
import { characterApi } from "./getCharacter";
import { profileReducer } from "./reducer";

const store = configureStore({
  reducer: {
    [profileApi.reducerPath]: profileApi.reducer,
    [characterApi.reducerPath]: characterApi.reducer,
    profile: profileReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(profileApi.middleware)
      .concat(characterApi.middleware),

  devTools: true,
});

setupListeners(store.dispatch);

export default store;

// TODO : https://redux-toolkit.js.org/tutorials/rtk-query
