import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { AUTH_FEATURE_KEY, authReducer } from "./auth.reducer";
import { topbarReducer, TOPBAR_FEATURE_KEY } from "./topbar.reducer";
import {categoryReducer,CATEGORY_REDUCER} from './category.reducer';
import {brandsReducer, BRAND_REDUCER} from './brands.reducer'
import { giftCardsReducer, GIFTCARD_REDUCER } from "./giftCards.reducer";
import {cartItemReducer, CART_ITEMS_REDUCER} from './cart.reducer';



import { profileReducer, PROFILE__FEATURE_KEY } from './profile.reducer';
import { useractiveReducer, USER_ACTIVE_FEATURE_KEY } from './useractive.reducer';
import { rewardpointsReducer, REWARDS_POINTS_FEATURE_KEY } from './rewardpoints.reducer';

const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (error) {
    console.log(error);
  }
};
const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    } else {
      return JSON.parse(serializedState);
    }
  } catch (error) {
    console.log(error);
    return undefined;
  }
};
const persistedState = loadFromLocalStorage();

const store = configureStore({
  reducer: {
    [AUTH_FEATURE_KEY]: authReducer,
    [TOPBAR_FEATURE_KEY]: topbarReducer,
    [CATEGORY_REDUCER]: categoryReducer,
    [BRAND_REDUCER]: brandsReducer,
    [GIFTCARD_REDUCER]: giftCardsReducer,
    [CART_ITEMS_REDUCER]: cartItemReducer,
    [PROFILE__FEATURE_KEY]: profileReducer,
    [USER_ACTIVE_FEATURE_KEY]: useractiveReducer,
    [REWARDS_POINTS_FEATURE_KEY]: rewardpointsReducer
  },
  persistedState,
  middleware: [...getDefaultMiddleware()],
  enhancers: [],
  preloadedState: {}
});
store.subscribe(() => saveToLocalStorage(store.getState()));
export default store;
