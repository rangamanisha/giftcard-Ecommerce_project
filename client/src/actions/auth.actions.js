import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginAPI, signupAPI, getUserByIdAPI } from "../services/auth.service";
import jwt_decode from 'jwt-decode';

export const loginAction = createAsyncThunk('auth/login', async (payload, thunkAPI) => {
    const request = {
        // signin: {
        //     email: payload.email,
        //     password: payload.password
        // }
        email: payload.email,
        password: payload.password
    }
    const response = await loginAPI(request);
    if(response.access) {
        localStorage.setItem('access_token', response.access);
        const decodedToken = jwt_decode(response.access);
        console.log('decodedToken ', decodedToken);
        console.log('user_id ', decodedToken['user_id']);
        const user = await thunkAPI.dispatch(getUserByIdAction({id: decodedToken['user_id']}));
        response.user = user;
    }
    return response;
});


export const signupAction = createAsyncThunk('auth/signup', async (payload, thunkAPI) => {
    const request = {
        // signup: {

        // }
        first_name: payload.first_name,
        last_name: payload.last_name,
        email: payload.email,
        password: "Test@1234",
        confirm_password: "Test@1234"
        // country_name: payload.country_name,
        // phone: payload.phone,
        // lang_key: payload.lang_key
    }
    const response = await signupAPI(request);
    return response;
});


export const getUserByIdAction = createAsyncThunk('auth/user/id/get', async (payload, thunkAPI) => {
        const id = payload.id;
        console.log('id ', id);
        const response = await getUserByIdAPI(id);
        return response;
});
