import {
  createEntityAdapter,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import { getuseractiveAction } from "../actions/useractive.actions";

export const USER_ACTIVE_INITIAL_STATE = {
  email: null,
  default: false,
  verified: false,
  status: null,
  code: null,
  message: null,
  errors: [],
};

export const USER_ACTIVE_FEATURE_KEY = "useractive";
export const useractiveAdapter = createEntityAdapter();
export const initialUserActiveState = useractiveAdapter.getInitialState(
  USER_ACTIVE_INITIAL_STATE
);

export const useractiveSlice = createSlice({
  name: USER_ACTIVE_FEATURE_KEY,
  initialState: USER_ACTIVE_INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getuseractiveAction.pending, (state) => {
        state.default = true;
      })
      .addCase(getuseractiveAction.fulfilled, (state, action) => {
        const response = action.payload;
        if (response.code === 200) {
          state.default = true;
          state.verified = response.data.user_email.verified;
        }
      })
      .addCase(getuseractiveAction.rejected, (state) => {
        state.default = true;
      });
  },
});

export const useractiveReducer = useractiveSlice.reducer;
export const useractiveActions = useractiveSlice.actions;
export const { selectAll, selectEntities } = useractiveAdapter.getSelectors();
export const getUserActiveState = (rootState) =>
  rootState[USER_ACTIVE_FEATURE_KEY];
export const selectAllUserActive = createSelector(
  getUserActiveState,
  selectAll
);
export const selectUserActiveEntities = createSelector(
  getUserActiveState,
  selectEntities
);
