import {
  createEntityAdapter,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import {
  getRewardPointsAction,
  getTransactionsAction,
  getConvertAction,
  getRemainingAction,
  getConvertCreditsAction,
} from "../actions/rewardpoints.actions";

export const REWARDS_POINTS_INITIAL_STATE = {
  total_credits: null,
  gc_value: null,
  status: null,
  code: null,
  message: null,
  conversion_limit: null,
  original_value: null,
  remaining_value: null,
  credits: [],
  errors: [],
};

export const REWARDS_POINTS_FEATURE_KEY = "rewardpoints";
export const rewardpointsAdapter = createEntityAdapter();
export const initialRewardPointsState = rewardpointsAdapter.getInitialState(
  REWARDS_POINTS_INITIAL_STATE
);

export const rewardpointsSlice = createSlice({
  name: REWARDS_POINTS_FEATURE_KEY,
  initialState: REWARDS_POINTS_INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRewardPointsAction.pending, (state, action) => {
        state.code = true;
      })
      .addCase(getRewardPointsAction.fulfilled, (state, action) => {
        const response = action.payload;
        if (response.code === 200) {
          state.code = true;
          state.total_credits = response.data.total_credits;
        }
      })
      .addCase(getRewardPointsAction.rejected, (state, action) => {
        state.code = true;
      })
      .addCase(getTransactionsAction.fulfilled, (state, action) => {
        const response = action.payload;
        if (response.code === 200) {
          state.credits = response.data.credits;
        }
      })
      .addCase(getTransactionsAction.rejected, (state, action) => {})
      .addCase(getConvertAction.fulfilled, (state, action) => {
        const response = action.payload;
        if (response.code === 200) {
          state.conversion_limit = response.data.conversion_limit;
        }
      })
      .addCase(getConvertAction.rejected, (state, action) => {})
      .addCase(getRemainingAction.fulfilled, (state, action) => {
        const response = action.payload;
        if (response.code === 200) {
          state.original_value = response.data.giftcard.original_value;
          state.remaining_value = response.data.giftcard.remaining_value;
        } else if (response.code === 400) {
          state.message = response.message;
        }
      })
      .addCase(getRemainingAction.rejected, (state, action) => {})
      .addCase(getConvertCreditsAction.fulfilled, (state, action) => {
        const response = action.payload;
        if (response.code === 200) {
          state.total_credits = response.data.total_credits;
          state.gc_value = response.data.gc_value;
          state.message = response.message;
        }
      })
      .addCase(getConvertCreditsAction.rejected, (state, action) => {});
  },
});

export const rewardpointsReducer = rewardpointsSlice.reducer;
export const rewardpointsActions = rewardpointsSlice.actions;
export const { selectAll, selectEntities } = rewardpointsAdapter.getSelectors();
export const getRewardPointsState = (rootState) =>
  rootState[REWARDS_POINTS_FEATURE_KEY];
export const selectAllRewardPoints = createSelector(
  getRewardPointsState,
  selectAll
);
export const selectRewardPointsEntities = createSelector(
  getRewardPointsState,
  selectEntities
);
