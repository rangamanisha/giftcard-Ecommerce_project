import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { AUTH_FEATURE_KEY, authReducer } from "./auth.reducer";
import { topbarReducer, TOPBAR_FEATURE_KEY } from "./topbar.reducer";
import {categoryReducer,CATEGORY_REDUCER} from './category.reducer';
import {brandsReducer, BRAND_REDUCER} from './brands.reducer'

const store = configureStore({
  reducer: {
    [AUTH_FEATURE_KEY]: authReducer,
    [TOPBAR_FEATURE_KEY]: topbarReducer,
    [CATEGORY_REDUCER]: categoryReducer,
    [BRAND_REDUCER]: brandsReducer
  },
  middleware: [...getDefaultMiddleware()],
  enhancers: [],
  preloadedState: {},
});

export default store;
