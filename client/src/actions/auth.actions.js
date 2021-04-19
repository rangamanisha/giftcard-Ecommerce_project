import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginAPI, signupAPI, resetpasswordAPI, forgotpasswordAPI } from '../services/auth.service';

export const loginAction = createAsyncThunk('auth/login', async (payload, thunkAPI) => {
  const request = {
    email: payload.email,
    password: payload.password
  };
  const response = await loginAPI(request);
  return response;
});

export const signupAction = createAsyncThunk('auth/signup', async (payload, thunkAPI) => {
  console.log('signup action ');
  const request = {
    first_name: payload.first_name,
    last_name: payload.last_name,
    email: payload.email,
    password: payload.password,
    confirm_password: payload.confirm_password
  };

  const response = await signupAPI(request);
  return response;
});

export const resetpasswordAction = createAsyncThunk(
  'auth/resetpassword',
  async (payload, thunkAPI) => {
    const request = {
      new_password: payload.new_password,
      confirm_password: payload.confirm_password,
      token: payload.token
    };

    const response = await resetpasswordAPI(request);
    return response;
  }
);

export const forgotpasswordAction = createAsyncThunk(
  'auth/resetpassword',
  async (payload, thunkAPI) => {
    const request = {
      email: payload.email
    };

    const response = await forgotpasswordAPI(request);
    return response;
  }
);
