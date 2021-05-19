import {
  createEntityAdapter,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";

export const PAGE_LOADER_INITIAL_STATE = {
  loading: false,
};

export const PAGE_LOADER_FEATURE_KEY = "pg";
export const pageLoaderAdapter = createEntityAdapter();
export const initialPageLoaderState = pageLoaderAdapter.getInitialState(
  PAGE_LOADER_INITIAL_STATE
);

export const pageLoaderSlice = createSlice({
  name: PAGE_LOADER_FEATURE_KEY,
  initialState: initialPageLoaderState,
  reducers: {
    setPageLoadingAction(state, action) {
      state.loading = action.payload;
    },
  },
});

export const pageLoaderReducer = pageLoaderSlice.reducer;
export const pageLoaderActions = pageLoaderSlice.actions;
export const { selectAll, selectEntities } = pageLoaderAdapter.getSelectors();
export const getPageLoaderState = (rootState) =>
  rootState[PAGE_LOADER_FEATURE_KEY];
export const selectAllPageLoader = createSelector(
  getPageLoaderState,
  selectAll
);
export const selectPageLoaderEntities = createSelector(
  getPageLoaderState,
  selectEntities
);
