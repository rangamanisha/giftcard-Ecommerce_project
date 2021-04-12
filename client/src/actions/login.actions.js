import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginAPI } from "../services/auth.service";

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