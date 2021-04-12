import { createEntityAdapter, createSelector, createSlice } from "@reduxjs/toolkit"
import { loginAction } from "../actions/login.actions";
import { signupAction } from "../actions/signup.actions";

export const AUTH_INITIAL_STATE_LOGIN = {
    user:null,
    state:null,
    message:null,
    errors:null,
    isAuthenticated: false,
    accessToken: null,
    idToken: null,
    refreshToken: null,
    expiresIn: null
}


export const AUTH_INITIAL_STATE_SIGNUP = {
    user:null,
    status : null,
    errors: null,
    code: null,
    message: null,z
}


export const AUTH_FEATURE_KEY = 'auth';
export const authAdapter = createEntityAdapter();
export const initialAuthState = authAdapter.getInitialState(AUTH_INITIAL_STATE_LOGIN);


export const authSlice = createSlice({
    name: AUTH_FEATURE_KEY,
    initialState: AUTH_INITIAL_STATE_LOGIN,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loginAction.pending, (state, action) => {
            state.errors = null;
            state.user = null;

        })
        .addCase(loginAction.fulfilled, (state, action) => {
            const response = action.payload;
            console.log('response ', response);
            if(response.code === 200) {
                state.user = response.data.user;
                state.accessToken = response.data.user.access_token;
                state.isAuthenticated = true;
                localStorage.setItem('access_token', response.data.user.access_token);
            }
            if(response.code === 400) {
                state.user = null;
                state.errors = [response.message]
            }
        })
        .addCase(loginAction.rejected, (state, action) => {
            state.errors = [action.error.message || ''];
        })
    }
});




export const signupslice = createSlice({
    name: AUTH_FEATURE_KEY,
    initialState: AUTH_INITIAL_STATE_SIGNUP,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(signupAction.pending, (state, action) => {
            state.errors = null;
            state.user = null;

        })
        .addCase(signupAction.fulfilled, (state, action) => {
            const response = action.payload;
            console.log('response ', response);
            if(response.code === 200) {
                state.user = response.data.user;
            }
            if(response.code === 400) {
                state.user = null;
                state.errors = [response.message]
            }
        })
        .addCase(signupAction.rejected, (state, action) => {
            state.errors = [action.error.message || ''];
        })
    }
});







export const authReducer = authSlice.reducer;
export const authActions = authSlice.actions;
export const { selectAll, selectEntities} = authAdapter.getSelectors();
export const getAuthState = (rootState) => rootState[AUTH_FEATURE_KEY];
export const selectAllAuth = createSelector(getAuthState, selectAll);
export const selectAuthEntities = createSelector(getAuthState, selectEntities);

