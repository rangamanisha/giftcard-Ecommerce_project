import {
  createEntityAdapter,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import swal from "sweetalert";

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
  triggerConversion: "",
  triggerevent: null,
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
          state.message = null;
          state.total_credits = response.data.total_credits;
        } else if (response.code === 400)
          state.errors = [response.message || response.detail || ""];
      })
      .addCase(getRewardPointsAction.rejected, (state, action) => {
        state.code = true;
      })
      .addCase(getTransactionsAction.fulfilled, (state, action) => {
        const response = action.payload;
        if (response.code === 200) {
          state.credits = response.data.credits;
        } else if (response.code === 400)
          state.errors = [response.message || response.detail || ""];
      })
      .addCase(getTransactionsAction.rejected, (state, action) => {})
      .addCase(getConvertAction.pending, (state, action) => {
        state.remaining_value = null;
        // state.triggerConversion = "";
      })
      .addCase(getConvertAction.fulfilled, (state, action) => {
        const response = action.payload;
        if (response.code === 200) {
          state.conversion_limit = response.data.conversion_limit;
          state.triggerConversion = true;

          state.errors = [];
        } else if (response.code === 400 || response.code === 401) {
          state.triggerConversion = "";
          state.errors = [response.message || response.detail || ""];
        }
      })
      .addCase(getConvertAction.rejected, (state, action) => {
        state.remaining_value = null;
      })
      .addCase(getRemainingAction.pending, (state, action) => {
        state.remaining_value = null;
      })
      .addCase(getRemainingAction.fulfilled, (state, action) => {
        const response = action.payload;
        if (response.code === 200) {
          state.message = "";
          state.original_value = response.data.giftcard.original_value;
          state.remaining_value = response.data.giftcard.remaining_value;
        } else if (response.code === 400) {
          state.remaining_value =
            response.data &&
            response.data.giftcard &&
            response.data.giftcard.remaining_value;
          if (
            response.data &&
            response.data.giftcard &&
            response.data.giftcard.remaining_value === 0
          ) {
            swal({
              title: "",
              icon: "error",
              text: "Your gift card has already been redeemed",
              buttons: {
                cancel: {
                  text: "Cancel",
                  value: false,
                  visible: true,
                  className: "",
                  closeModal: true,
                },
              },
            });
          }
        }
      })
      .addCase(getRemainingAction.rejected, (state, action) => {
        state.code = true;
      })
      .addCase(getConvertCreditsAction.fulfilled, (state, action) => {
        const response = action.payload;
        if (response.code === 200) {
          state.total_credits = response.data.total_credits;
          state.gc_value = response.data.gc_value;
          swal("", "Gift card successfully converted to points.", "success");
          // swal({
          //   title: "",
          //   icon: "success",
          //   text: "Gift card successfully converted to points.",
          //   type: "",
          // });
          state.errors = [];
          state.message = response.message;
        } else if (response.code === 400)
          state.errors = [response.message || response.detail || ""];
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
