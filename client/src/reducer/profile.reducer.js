import { createEntityAdapter, createSelector, createSlice } from "@reduxjs/toolkit"
import { getprofileListAction } from "../actions/profile.actions";

export const PROFILE_INITIAL_STATE = {
    first_name: null,
    last_name: null,
    email: null,
    id: null,
    is_active: false,
    role: null,
    date_joined:null,
    language: null,
    date_of_birth: null,
    country: null
}


export const PROFILE__FEATURE_KEY = 'profile';
export const ProfileAdapter = createEntityAdapter();
export const initialProfileState = ProfileAdapter.getInitialState(PROFILE_INITIAL_STATE);


export const profileSlice = createSlice({
    name: PROFILE__FEATURE_KEY,
    initialState: PROFILE_INITIAL_STATE,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getprofileListAction.pending, (state, action) => {
            state.is_active = true;
        })
        .addCase(getprofileListAction.fulfilled, (state, action) => {
            const response = action.payload;
            if(response.code === 200) {
                state.is_active = true;
                state.first_name = response.data.profile.first_name;
                state.last_name = response.data.profile.last_name;
                state.language = response.data.profile.language;
                state.email = response.data.profile.email;
                state.date_of_birth = response.date_of_birth;
                state.country = response.data.profile.nationality;
            }
        })
        .addCase(getprofileListAction.rejected, (state, action) => {
            state.is_active = true;
        })
    }
});


export const profileReducer = profileSlice.reducer;
export const profileActions = profileSlice.actions;
export const { selectAll, selectEntities} = ProfileAdapter.getSelectors();
export const getProfileState = (rootState) => rootState[PROFILE__FEATURE_KEY];
export const selectAllProfile = createSelector(getProfileState, selectAll);
export const selectProfileEntities = createSelector(getProfileState, selectEntities);

