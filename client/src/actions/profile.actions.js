import { createAsyncThunk } from "@reduxjs/toolkit";
import { getprofileAPI } from "../services/profile.service";

export const getprofileListAction = createAsyncThunk('profile/get', async (payload, thunkAPI) => {
    const response = await getprofileAPI();
    return response;
});