import { createAsyncThunk } from "@reduxjs/toolkit";
import { pageLoaderActions } from "../reducer/page-loader.reducer";
import { getprofileAPI, updateprofileAPI } from "../services/profile.service";

export const getprofileListAction = createAsyncThunk(
  "profile/get",
  async (payload, thunkAPI) => {
    const { dispatch } = thunkAPI;
    dispatch(pageLoaderActions.setPageLoadingAction(true));
    const response = await getprofileAPI();
    dispatch(pageLoaderActions.setPageLoadingAction(false));
    return response;
  }
);

export const updateUserprofileAction = createAsyncThunk(
  "profile/update",
  async (payload, thunkAPI) => {
    console.log(payload);
    const { dispatch } = thunkAPI;
    console.log(payload)
    const request = {
      user: {
        first_name: payload.firstName,
        last_name: payload.lastName,
        birthday: payload.dob,
        nationality: payload.country,
        gender: payload.gender,
        language:payload.language,
        phone: payload.phone
      },
    };
    const response = await updateprofileAPI(request);
    dispatch(getprofileListAction());
    dispatch(pageLoaderActions.setPageLoadingAction(false));
    return response;
  }
);
