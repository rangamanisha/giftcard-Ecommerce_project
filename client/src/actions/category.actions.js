import {createAsyncThunk} from "@reduxjs/toolkit";
import { categorylistAPI } from "../services/category.service";
import jwt_decode from 'jwt-decode';

export const categoryAction = createAsyncThunk('category/listCategories', async (payload, thunkAPI) => {
    const request = {
        
        currency:payload.currency,
        program_id:payload.program_id
    }
    const response = await categorylistAPI(request);
    return response;
});


 