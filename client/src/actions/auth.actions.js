import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginAPI, signupAPI } from "../services/auth.service";

export const loginAction = createAsyncThunk('auth/login', async (payload, thunkAPI) => {
    const request = {
        signin: {
            email: payload.email,
            password: payload.password
        }
    }
    const response = await loginAPI(request);
    return response;
});


export const signupAction = createAsyncThunk('auth/signup', async (payload, thunkAPI) => {
    console.log('signup action ');
    const request = {
        signup: {
            first_name: payload.first_name,
            last_name: payload.last_name,
            email: payload.email,
            country_name: payload.country_name,
            phone: payload.phone,
            lang_key: payload.lang_key
        }
    }
    const response = await signupAPI(request);
    return response;
});