import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  allOrderApiCall,
  orderDetailsApiCall,
  failedOrderApiCall,
  processOrderApiCall,
  createOrderAPI,
} from "../services/orders.service";

export const AllorderAction = createAsyncThunk(
  "orders",
  async (payload, thunkAPI) => {
    const request = {
      // currency:payload.currency,
      image_size: payload.image_size,
      limit: payload.limit,
      offset: payload.offset,
    };
    const response = await allOrderApiCall(request);
    console.log(response);
    return response;
  }
);
export const ProcessOrderAction = createAsyncThunk(
  "ProcessOrder",
  async (payload, thunkAPI) => {
    const request = {
      order_id: payload.order_id,
    };
    const response = await processOrderApiCall(request);
    console.log(response);
    return response;
  }
);
export const OrderDetailsAction = createAsyncThunk(
  "OrderDetail",
  async (payload, thunkAPI) => {
    const request = {
      order_id: payload.order_id,
      image_size: payload.image_size,
    };
    const response = await orderDetailsApiCall(request);
    console.log(response);
    return response;
  }
);
export const FailedOrderAction = createAsyncThunk(
  "FailedOrder",
  async (payload, thunkAPI) => {
    const request = {
      order_id: payload.order_id,
    };
    const response = await failedOrderApiCall(request);
    console.log(response);
    return response;
  }
);

export const createOrderAction = createAsyncThunk(
  "order/create",
  async (payload, thunkAPI) => {
    const response = await createOrderAPI(payload);
    return response;
  }
);

export const createOrderCheckout = createAsyncThunk(
  "order/checkout",
  async (payload, thunkAPI) => {}
);
