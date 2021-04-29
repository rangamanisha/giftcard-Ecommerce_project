import {createAsyncThunk} from '@reduxjs/toolkit';
import {allOrderApiCall} from '../services/orders.service';

export const AllorderAction = createAsyncThunk('brands/listtermBrand', async(payload, thunkAPI) => {
    const request = {
        currency:payload.currency,
        image : payload.image
    }
    const response = await allOrderApiCall(request);
    console.log(response);
    return response;
});