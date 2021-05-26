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
  updatepasswordAction,
  logoutAction,
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
  token_type: "",
  refreshToken: null,
  expiresIn: null,
  status: null,
  success: false,
  alertlogin: false,
  signupOrLoginActionClicked: false,
  signupSuccess: false,
  reset: false,
  email: null,
  provider: null,
};

export const AUTH_FEATURE_KEY = "auth";
export const authAdapter = createEntityAdapter();
export const initialAuthState = authAdapter.getInitialState(
  AUTH_INITIAL_STATE_LOGIN
);

export const authSlice = createSlice({
  name: AUTH_FEATURE_KEY,
  initialState: initialAuthState,
  reducers: {
    removeLoginOrSignUpMessage(state, action) {
      state.signupOrLoginActionClicked = action.payload;
    },
    clearErrors(state, action) {
      state.errors = null;
      state.reset = false;
      state.signupSuccess = false;
      state.verified = true;
      state.signupOrLoginActionClicked = false;
      state.status = null;
      state.message = null;
    },
    setAuthState(state, action) {
      state.user = action.payload;
      state.accessToken = action.payload.access_token;
      state.isAuthenticated = true;
      localStorage.setItem("access_token", action.payload.access_token);
      localStorage.setItem("first_name", action.payload.first_name);
    },
    setErrors(state, action) {
      state.errors = action.payload;
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
          state.email = response.data.user.email;
          state.provider = response.data.provider;
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
          state.user = response.data.user;
          state.accessToken = response.data.user.access_token;
          state.isAuthenticated = true;
          localStorage.setItem("access_token", response.data.user.access_token);
          localStorage.setItem("first_name", response.data.user.first_name);
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
      .addCase(logoutAction.fulfilled, (state) => {
        state.user = null;
        state.state = null;
        state.message = null;
        state.errors = null;
        state.isAuthenticated = false;
        state.first_name = null;
        state.accessToken = null;
        state.idToken = null;
        state.token_type = "";
        state.refreshToken = null;
        state.expiresIn = null;
        state.status = null;
        state.success = false;
        state.alertlogin = false;
        state.signupOrLoginActionClicked = false;
        state.signupSuccess = false;
        state.reset = false;
        state.email = null;
        state.provider = null;
      });
  },
});

export const authReducer = authSlice.reducer;
export const authActions = authSlice.actions;
export const { selectAll, selectEntities } = authAdapter.getSelectors();
export const getAuthState = (rootState) => rootState[AUTH_FEATURE_KEY];
export const selectAllAuth = createSelector(getAuthState, selectAll);
export const selectAuthEntities = createSelector(getAuthState, selectEntities);
