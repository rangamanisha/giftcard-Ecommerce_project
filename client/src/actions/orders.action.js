import {createAsyncThunk} from '@reduxjs/toolkit';
import {allOrderApiCall} from '../services/orders.service';

export const AllorderAction = createAsyncThunk('orders', async(payload, thunkAPI) => {
    const request = {
        currency:payload.currency,
        image_size : payload.image_size,
        limit:payload.limit,
        offset:payload.offset

    }
    const response = await allOrderApiCall(request);
    console.log(response);
    return response;
});