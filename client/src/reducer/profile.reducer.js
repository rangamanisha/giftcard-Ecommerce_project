import {
  createEntityAdapter,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import {
  getprofileListAction,
  updateUserprofileAction,
} from "../actions/profile.actions";

export const PROFILE_INITIAL_STATE = {
  profile: null,
  error: null,
  profile_updated: false,
};

export const PROFILE__FEATURE_KEY = "profile";
export const ProfileAdapter = createEntityAdapter();
export const initialProfileState = ProfileAdapter.getInitialState(
  PROFILE_INITIAL_STATE
);

export const profileSlice = createSlice({
  name: PROFILE__FEATURE_KEY,
  initialState: PROFILE_INITIAL_STATE,
  reducers: {
    clearErrors(state) {
      state.error = null;
      state.profile_updated = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getprofileListAction.pending, (state, action) => {
        state.is_active = true;
      })
      .addCase(getprofileListAction.fulfilled, (state, action) => {
        const response = action.payload;
        if (response.code === 200) {
          state.profile = response.data.profile;
        }
      })
      .addCase(getprofileListAction.rejected, (state, action) => {
        state.is_active = true;
      })
      .addCase(updateUserprofileAction.pending, (state, action) => {
        state.is_active = true;
        state.error = null;
        state.profile_updated = false;
      })
      .addCase(updateUserprofileAction.fulfilled, (state, action) => {
        const response = action.payload;
        if (response.code === 200) {
          state.profile = response.data.profile;
          state.profile_updated = true;
        } else {
          state.error = response?.message || "Error in updating profile.";
        }
      })
      .addCase(updateUserprofileAction.rejected, (state, action) => {
        state.is_active = true;
        state.error = null;
        state.profile_updated = true;
      });
  },
});

export const profileReducer = profileSlice.reducer;
export const profileActions = profileSlice.actions;
export const { selectAll, selectEntities } = ProfileAdapter.getSelectors();
export const getProfileState = (rootState) => rootState[PROFILE__FEATURE_KEY];
export const selectAllProfile = createSelector(getProfileState, selectAll);
export const selectProfileEntities = createSelector(
  getProfileState,
  selectEntities
);
