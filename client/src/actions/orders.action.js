import {createAsyncThunk} from '@reduxjs/toolkit';
import {allOrderApiCall, orderDetailsApiCall,failedOrderApiCall,processOrderApiCall } from '../services/orders.service';

export const AllorderAction = createAsyncThunk('orders', async(payload, thunkAPI) => {
    const request = {
        // currency:payload.currency,
        image_size : payload.image_size,
        limit:payload.limit,
        offset:payload.offset
    }
    const response = await allOrderApiCall(request);
    return response;
});
export const ProcessOrderAction = createAsyncThunk('ProcessOrder', async(payload, thunkAPI) => {
    const request = {
        order_id:payload.order_id
    }
    const response = await processOrderApiCall(request);
    return response;
});
export const OrderDetailsAction = createAsyncThunk('OrderDetail', async(payload, thunkAPI) => {
    const request = {
        order_id:payload.order_id,
        image_size:payload.image_size
    }
    const response = await orderDetailsApiCall(request);
    return response;
});
export const FailedOrderAction = createAsyncThunk('FailedOrder', async(payload, thunkAPI) => {
    const request = {
        order_id:payload.order_id
    }
    const response = await failedOrderApiCall(request);
    return response;
});
