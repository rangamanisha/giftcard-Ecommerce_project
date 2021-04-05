import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { AUTH_FEATURE_KEY, authReducer } from "./auth.reducer";

const store = configureStore({
  reducer: {
    [AUTH_FEATURE_KEY]: authReducer,
  },
  middleware: [...getDefaultMiddleware()],
  enhancers: [],
  preloadedState: {},
});

export default store;
