import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  loginAPI,
  signupAPI,
  resetpasswordAPI,
  forgotpasswordAPI,
  googleloginAPI,
  updatepasswordAPI,
  facebookAPI
} from "../services/auth.service";

export const loginAction = createAsyncThunk(
  "auth/login",
  async (payload, thunkAPI) => {
    const request = {
      signin: { email: payload.email, password: payload.password },
    };
    const response = await loginAPI(request);
    return response;
  }
);

export const googlesigninAction = createAsyncThunk(
  "auth/googlelogin",
  async (payload, thunkAPI) => {
    console.log(payload)
    const request = {
      signin: {
        email:payload.email,
        phone:payload.email,
        provider: payload.provider,
        token_type: "Bearer",
        token: payload.accessToken,
        expires_at: payload.expires_at
      },
    };
    const response = await googleloginAPI(request);
    return response;
  }
);
export const facebookAction = createAsyncThunk(
  "auth/facebooklogin",
  async(payload, thunkAPI) => {
    const request = {
      signin : {
        email:payload.email,
        phone:payload.email,
        token_type: "Bearer",
        provider: payload.provider,
        token: payload.accessToken,
        expires_at: payload.expires_at
      },
    };
    const response = await facebookAPI(request);
    return response
  }
);
export const signupAction = createAsyncThunk(
  "auth/signup",
  async (payload, thunkAPI) => {
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
    return response;
  }
);

export const resetpasswordAction = createAsyncThunk(
  "auth/resetpassword",
  async (payload, thunkAPI) => {
    const request = {
      change_password: {
        password: payload.password,
        password_confirmation: payload.password_confirmation,
      },
      token: payload.token,
    };

    const response = await resetpasswordAPI(request);
    return response;
  }
);

export const updatepasswordAction = createAsyncThunk(
  "auth/updatepassword",
  async (payload, thunkAPI) => {
    const request = {
      change_password: {
        password: payload.password,
        password_confirmation: payload.password_confirmation,
      },
    };

    const response = await updatepasswordAPI(request);
    return response;
  }
);

export const forgotpasswordAction = createAsyncThunk(
  "auth/forgotpassword",
  async (payload, thunkAPI) => {
    const request = {
      email: payload.email,
      idc: payload.idc,
    };

    const response = await forgotpasswordAPI(request);
    return response;
  }
);
