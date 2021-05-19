import {
  createEntityAdapter,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";

export const COMMON_INITIAL_STATE = {
  contact: null,
  user: null,
  giftingToUser: null,
};

export const COMMON_FEATURE_KEY = "common";
export const commonAdapter = createEntityAdapter();
export const initialCommonState =
  commonAdapter.getInitialState(COMMON_INITIAL_STATE);

export const commonSlice = createSlice({
  name: COMMON_FEATURE_KEY,
  initialState: initialCommonState,
  reducers: {
    updateContact(state, action) {
      state.contact = action.payload;
    },
    setUser(state, action) {
      state.user = action.payload;
    },
    setGiftingToUser(state, action) {
      state.giftingToUser = action.payload;
    },
  },
});

export const commonReducer = commonSlice.reducer;
export const commonActions = commonSlice.actions;
export const { selectAll, selectEntities } = commonAdapter.getSelectors();
export const getCommonState = (rootState) => rootState[COMMON_FEATURE_KEY];
export const selectAllCommon = createSelector(getCommonState, selectAll);
export const selectCommonEntities = createSelector(
  getCommonState,
  selectEntities
);
