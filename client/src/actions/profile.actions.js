import { createAsyncThunk } from "@reduxjs/toolkit";
import { getprofileAPI, updateprofileAPI } from "../services/profile.service";

export const getprofileListAction = createAsyncThunk(
  "profile/get",
  async (payload, thunkAPI) => {
    const response = await getprofileAPI();
    return response;
  }
);

export const updateUserprofileAction = createAsyncThunk(
  "profile/update",
  async (payload, thunkAPI) => {
    const { dispatch } = thunkAPI;
    const request = {
      user: {
        first_name: payload.firstName,
        last_name: payload.lastName,
        birthday: payload.dob,
        gender: payload.gender,
        nationality: payload.country,
      },
    };
    const response = await updateprofileAPI(request);
    dispatch(getprofileListAction());
    return response;
  }
);
