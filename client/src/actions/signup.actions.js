import { createAsyncThunk } from "@reduxjs/toolkit";
import { signupAPI } from "../services/auth.service";

export const signupAction = createAsyncThunk('auth/signup', async (payload, thunkAPI) => {
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