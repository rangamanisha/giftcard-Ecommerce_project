import {
  createEntityAdapter,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import {
  loginAction,
  signupAction,
  resetpasswordAction,
  forgotpasswordAction,
  googlesigninAction,
  updatepasswordAction,
} from "../actions/auth.actions";

export const AUTH_INITIAL_STATE_LOGIN = {
  user: null,
  state: null,
  message: null,
  errors: null,
  isAuthenticated: false,
  first_name: null,
  accessToken: null,
  idToken: null,
  refreshToken: null,
  expiresIn: null,
  status: null,
  success: false,
  alertlogin: false,
  signupOrLoginActionClicked: false,
  signupSuccess: false,
  reset: false,
};

export const AUTH_FEATURE_KEY = "auth";
export const authAdapter = createEntityAdapter();
export const initialAuthState = authAdapter.getInitialState(
  AUTH_INITIAL_STATE_LOGIN
);

export const authSlice = createSlice({
  name: AUTH_FEATURE_KEY,
  initialState: AUTH_INITIAL_STATE_LOGIN,
  reducers: {
    removeLoginOrSignUpMessage(state, action) {
      state.signupOrLoginActionClicked = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAction.pending, (state, action) => {
        state.errors = null;
        state.user = null;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        const response = action.payload;
        if (response.code === 200) {
          state.user = response.data.user;
          state.accessToken = response.data.user.access_token;
          state.isAuthenticated = true;
          state.message = response.message;
          state.first_name = response.data.user.first_name;
          localStorage.setItem("access_token", response.data.user.access_token);
          localStorage.setItem("first_name", response.data.user.first_name);
          state.alertlogin = true;
          state.signupOrLoginActionClicked = true;
        }
        if (response.code === 400) {
          state.user = null;
          state.errors = [response.message];
        } else if (response.code === 401) {
          state.user = null;
          state.errors = [response.message || response.detail || ""];
        }
      })
      .addCase(loginAction.rejected, (state, action) => {
        state.errors = [action.error.message || ""];
      })
      .addCase(signupAction.pending, (state, action) => {
        state.errors = null;
        state.signupSuccess = false;
      })
      .addCase(signupAction.fulfilled, (state, action) => {
        const response = action.payload;
        if (response.code === 200) {
          state.signupActionClicked = true;
          state.signupSuccess = true;
          state.is_active = true;
          state.signupOrLoginActionClicked = true;
        }
        if (response.code === 400) {
          state.signupSuccess = false;
          state.errors = [response.message];
        }
        if (response.code === undefined) {
          state.errors = [response.email];
        }
      })
      .addCase(signupAction.rejected, (state, action) => {
        state.status = null;
        state.errors = [action.error.message || ""];
      })

      .addCase(resetpasswordAction.fulfilled, (state, action) => {
        const response = action.payload;
        if (response.code === 200) {
          state.message = [response.message];
          state.reset = true;
          state.errors = null;
        }
        if (response.code === 400) {
          state.errors = [response.message];
        }
      })
      .addCase(forgotpasswordAction.fulfilled, (state, action) => {
        const response = action.payload;
        if (response.code === 200) {
          state.status = response.status;
          state.errors = null;
        }
        if (response.code === 400) {
          state.errors = [response.message];
        }
        if (response.code === undefined) {
          state.errors = [response.email];
        }
      })
      .addCase(updatepasswordAction.fulfilled, (state, action) => {
        const response = action.payload;
        if (response.code === 200) {
          state.message = response.message;
          state.errors = null;
        }
        if (response.code === 400) {
          state.errors = [response.message];
        }
        if (response.code === undefined) {
          state.errors = [response.email];
        }
      })

      .addCase(googlesigninAction.fulfilled, (state, action) => {
        const response = action.payload;
        if (response.code === 200) {
          state.isAuthenticated = true;
          state.first_name = response.data.user.first_name;
          localStorage.setItem("access_token", response.data.user.access_token);
          localStorage.setItem("first_name", response.data.user.first_name);
        }
        if (response.code === 400) {
          state.errors = [response.message];
        }
      });
  },
});

export const authReducer = authSlice.reducer;
export const authActions = authSlice.actions;
export const { selectAll, selectEntities } = authAdapter.getSelectors();
export const getAuthState = (rootState) => rootState[AUTH_FEATURE_KEY];
export const selectAllAuth = createSelector(getAuthState, selectAll);
export const selectAuthEntities = createSelector(getAuthState, selectEntities);
