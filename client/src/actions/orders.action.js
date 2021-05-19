import { createAsyncThunk } from "@reduxjs/toolkit";
import { cartAction } from "../reducer/cart.reducer";
import { pageLoaderActions } from "../reducer/page-loader.reducer";
import {
  allOrderApiCall,
  orderDetailsApiCall,
  failedOrderApiCall,
  processOrderApiCall,
  createOrderAPI,
  createOrderCheckoutAPI,
  processOrderByGiftCardAPI,
  createGuestOrderAPI,
} from "../services/orders.service";

export const AllorderAction = createAsyncThunk(
  "orders",
  async (payload, thunkAPI) => {
    const { dispatch } = thunkAPI;
    dispatch(pageLoaderActions.setPageLoadingAction(true));
    const request = {
      // currency:payload.currency,
      image_size: payload.image_size,
      limit: payload.limit,
      offset: payload.offset,
    };
    const response = await allOrderApiCall(request);
    dispatch(pageLoaderActions.setPageLoadingAction(false));
    return response;
  }
);
export const processOrderAfterRedirectAction = createAsyncThunk(
  "ProcessOrder",
  async (payload, thunkAPI) => {
    const { dispatch } = thunkAPI;
    dispatch(pageLoaderActions.setPageLoadingAction(true));
    const request = {
      order_id: payload.order_id,
    };
    const response = await processOrderApiCall(request);
    dispatch(pageLoaderActions.setPageLoadingAction(false));
    return response;
  }
);
export const OrderDetailsAction = createAsyncThunk(
  "OrderDetail",
  async (payload, thunkAPI) => {
    const { dispatch } = thunkAPI;
    dispatch(pageLoaderActions.setPageLoadingAction(true));
    const request = {
      order_id: payload.order_id,
      image_size: payload.image_size,
    };
    const response = await orderDetailsApiCall(request, payload.accessToken);
    dispatch(pageLoaderActions.setPageLoadingAction(false));
    return response;
  }
);
export const FailedOrderAction = createAsyncThunk(
  "FailedOrder",
  async (payload, thunkAPI) => {
    const { dispatch } = thunkAPI;
    dispatch(pageLoaderActions.setPageLoadingAction(true));
    const request = {
      order_id: payload.order_id,
    };
    const response = await failedOrderApiCall(request);
    dispatch(pageLoaderActions.setPageLoadingAction(false));
    return response;
  }
);

export const createOrderAction = createAsyncThunk(
  "order/create",
  async (payload, thunkAPI) => {
    const { data, event } = payload;
    const { dispatch } = thunkAPI;
    dispatch(pageLoaderActions.setPageLoadingAction(true));
    const response = await createOrderAPI(data);
    if (response?.data?.order) {
      if (data.orders?.use_credits && !parseFloat(data.orders?.used_credits)) {
        await dispatch(
          processGiftCardCheckoutAction({
            order_id: response?.data?.order?.id,
          })
        );
      } else {
        const request = {
          payment: {
            token: event.token,
            amount:
              parseFloat(
                parseFloat(response?.data?.order?.payment_currency_amount) * 100
              ).toFixed(2) || 0,
            payment_currency: data.orders?.payment_currency,
            currency: data.orders?.payment_currency,
            order_id: response?.data?.order?.id,
          },
        };
        dispatch(createOrderCheckoutAction(request));
      }
    }
    dispatch(pageLoaderActions.setPageLoadingAction(false));
    return response;
  }
);

export const createOrderCheckoutAction = createAsyncThunk(
  "order/checkout",
  async (payload, thunkAPI) => {
    const { dispatch } = thunkAPI;
    dispatch(pageLoaderActions.setPageLoadingAction(true));
    const response = await createOrderCheckoutAPI(payload);
    dispatch(pageLoaderActions.setPageLoadingAction(false));
    return response;
  }
);

export const processGiftCardCheckoutAction = createAsyncThunk(
  "order/giftcard/checkout",
  async (payload, thunkAPI) => {
    const { dispatch } = thunkAPI;
    dispatch(pageLoaderActions.setPageLoadingAction(true));
    const response = await processOrderByGiftCardAPI(payload?.order_id);
    await dispatch(pageLoaderActions.setPageLoadingAction(false));
    if (
      response &&
      response.data &&
      response.data.order &&
      response.data.order.id
    ) {
      window.location.href = `${window.location.origin}/success?order_id=${payload?.order_id}`;
    } else {
      window.location.href = `${window.location.origin}/failure?order_id=${payload?.order_id}`;
    }
    return response;
  }
);

export const createGuestOrderAction = createAsyncThunk(
  "order/guest/create",
  async (payload, thunkAPI) => {
    const { data, event } = payload;
    const { dispatch } = thunkAPI;
    dispatch(pageLoaderActions.setPageLoadingAction(true));
    const response = await createGuestOrderAPI(data);
    if (response?.data?.order) {
      await dispatch(cartAction.saveItemsToCart([]));
      await dispatch(cartAction.updateTotalCartItems(0));
      const request = {
        payment: {
          token: event.token,
          amount:
            parseFloat(
              parseFloat(response?.data?.order?.payment_currency_amount) * 100
            ).toFixed(2) || 0,
          payment_currency: data.order?.payment_currency,
          currency: data.order?.payment_currency,
          order_id: response?.data?.order?.id,
        },
      };
      dispatch(createOrderCheckoutAction(request));
    }
    dispatch(pageLoaderActions.setPageLoadingAction(false));
    return response;
  }
);
