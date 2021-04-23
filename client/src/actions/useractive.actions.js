import { createAsyncThunk } from "@reduxjs/toolkit";
import { userActiveAPI } from "../services/useractive.service";

export const getuseractiveAction = createAsyncThunk('useractive/put', async (payload, thunkAPI) => {
    const request = 
        {
            token: ''
        }
    const response = await userActiveAPI(request);
    return response;
});