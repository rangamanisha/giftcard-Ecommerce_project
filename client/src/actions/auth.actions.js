import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  loginAPI,
  signupAPI,
  resetpasswordAPI,
  forgotpasswordAPI,
  googleloginAPI,
  updatepasswordAPI,
  facebookAPI,
  logoutAPI,
} from "../services/auth.service";

import { pageLoaderActions } from "../reducer/page-loader.reducer";

export const loginAction = createAsyncThunk(
  "auth/login",
  async (payload, thunkAPI) => {
    const { dispatch } = thunkAPI;
    dispatch(pageLoaderActions.setPageLoadingAction(true));
    const request = {
      signin: { ...payload },
    };
    const response = await loginAPI(request);
    dispatch(pageLoaderActions.setPageLoadingAction(false));
    return response;
  }
);
export const signupAction = createAsyncThunk(
  "auth/signup",
  async (payload, thunkAPI) => {
    const { dispatch } = thunkAPI;
    dispatch(pageLoaderActions.setPageLoadingAction(true));
    const request = {
      signup: {
        first_name: payload.first_name,
        last_name: payload.last_name,
        email: payload.email,
        password: payload.password,
        password_confirmation: payload.password_confirmation,
      },
    };

    const response = await signupAPI(request);
    dispatch(pageLoaderActions.setPageLoadingAction(false));
    return response;
  }
);

export const resetpasswordAction = createAsyncThunk(
  "auth/resetpassword",
  async (payload, thunkAPI) => {
    const { dispatch } = thunkAPI;
    dispatch(pageLoaderActions.setPageLoadingAction(true));
    const request = {
      change_password: {
        password: payload.password,
        password_confirmation: payload.password_confirmation,
      },
      token: payload.token,
    };

    const response = await resetpasswordAPI(request);
    dispatch(pageLoaderActions.setPageLoadingAction(false));
    return response;
  }
);

export const updatepasswordAction = createAsyncThunk(
  "auth/updatepassword",
  async (payload, thunkAPI) => {
    const { dispatch } = thunkAPI;
    dispatch(pageLoaderActions.setPageLoadingAction(true));
    const request = {
      change_password: {
        password: payload.password,
        password_confirmation: payload.password_confirmation,
      },
    };

    const response = await updatepasswordAPI(request);
    dispatch(pageLoaderActions.setPageLoadingAction(false));
    return response;
  }
);

export const forgotpasswordAction = createAsyncThunk(
  "auth/forgotpassword",
  async (payload, thunkAPI) => {
    const { dispatch } = thunkAPI;
    dispatch(pageLoaderActions.setPageLoadingAction(true));
    const request = {
      email: payload.email,
      idc: payload.idc,
    };

    const response = await forgotpasswordAPI(request);
    dispatch(pageLoaderActions.setPageLoadingAction(false));
    return response;
  }
);

export const logoutAction = createAsyncThunk(
  "auth/logout",
  async (payload, thunkAPI) => {
    const { dispatch } = thunkAPI;
    dispatch(pageLoaderActions.setPageLoadingAction(true));
    const response = await logoutAPI();
    dispatch(pageLoaderActions.setPageLoadingAction(true));
    return response;
  }
);
