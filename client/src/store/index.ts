import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { profileApi } from "./getProfile";
import { characterApi } from "./getCharacter";

const store = configureStore({
  reducer: {
    [profileApi.reducerPath]: profileApi.reducer,
    [characterApi.reducerPath]: characterApi.reducer,
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
