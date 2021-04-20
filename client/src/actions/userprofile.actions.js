import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCountriesAPI } from "../services/topbar.service";

export const getCountriesListAction = createAsyncThunk('/userprofile/get', async (payload, thunkAPI) => {
    const response = await getCountriesAPI();
    return response;
});