import { createEntityAdapter, createSelector, createSlice } from '@reduxjs/toolkit';
import { getCountriesListAction } from '../actions/topbar.actions';

export const TOPBAR_INITIAL_STATE = {
  countries: [],
  countriesLoading: false
};

export const TOPBAR_FEATURE_KEY = 'topbar';
export const topbarAdapter = createEntityAdapter();
export const initialTopBarState = topbarAdapter.getInitialState(TOPBAR_INITIAL_STATE);

export const topbarSlice = createSlice({
  name: TOPBAR_FEATURE_KEY,
  initialState: TOPBAR_INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCountriesListAction.pending, (state) => {
        state.countries = [];
        state.loading = true;
      })
      .addCase(getCountriesListAction.fulfilled, (state, action) => {
        const response = action.payload;
        state.loading = false;
        if (response.code === 200) {
          state.countries = response.data.countries;
        } else {
          state.countries = [];
        }
      })
      .addCase(getCountriesListAction.rejected, (state) => {
        state.countries = [];
        state.loading = false;
      });
  }
});

export const topbarReducer = topbarSlice.reducer;
export const topbarActions = topbarSlice.actions;
export const { selectAll, selectEntities } = topbarAdapter.getSelectors();
export const getTopBarState = (rootState) => rootState[TOPBAR_FEATURE_KEY];
export const selectAllTopBar = createSelector(getTopBarState, selectAll);
export const selectTopBarEntities = createSelector(getTopBarState, selectEntities);
