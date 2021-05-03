import { createEntityAdapter, createSelector, createSlice } from '@reduxjs/toolkit';
import {IdcSignInAction} from '../actions/idc_action';

const IDC_INITIAL_STATE = {
    user: null,
    state: null,
    message: null,
    errors: null,
    isIdcAuthenticated: false,
    first_name: null,
    accessToken: null,
    idToken: null,
    refreshToken: null,
    expiresIn: null,
    status: null,
    success: false,
    alert: false,
    signupSuccess: false,
    reset: false,
}

export const IDC_FEATURE_KEY = "idc_signin";
export const idcAdapter = createEntityAdapter();
export const initialIdcState = idcAdapter.getInitialState(IDC_INITIAL_STATE);

export const idcSlice = createSlice({
    name: IDC_FEATURE_KEY,
    initialState:IDC_INITIAL_STATE ,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(IdcSignInAction.pending, (state, action) => {
          state.errors = null;
          state.user = null;
        })
        .addCase(IdcSignInAction.fulfilled, (state, action) => {
            const response = action.payload;
            if (response.code === 200) {
              state.user = response.data.user;
              state.accessToken = response.data.user.access_token;
              state.isIdcAuthenticated = true;
              state.message = response.message;
              state.first_name = response.data.user.first_name;
              localStorage.setItem("idc_access_token", response.data.user.access_token);
              // localStorage.setItem("first_name", response.data.user.first_name);
            }
            if (response.code === 400) {
              state.user = null;
              state.errors = [response.message];
            } else if (response.code === 401) {
              state.user = null;
              state.errors = [response.message || response.detail || ""];
            }
          })
          .addCase(IdcSignInAction.rejected, (state, action) => {
            state.errors = [action.error.message || ""];
          })
        },
    });

export const idcReducer = idcSlice.reducer;
export const idcActions = idcSlice.actions;
export const { selectAll, selectEntities } = idcAdapter.getSelectors();
export const getIdcState = (rootState) => rootState[IDC_FEATURE_KEY];
export const selectAllAuth = createSelector(getIdcState, selectAll);
export const selectIdcEntities = createSelector(getIdcState, selectEntities);

