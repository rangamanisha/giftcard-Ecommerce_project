import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  cartItemsService,
  fetchItemsByCartService,
  addRemoveQuantityService,
  cartTotalCountService,
} from "../services/cart.service";

export const cartItemAction = createAsyncThunk(
  "cart_items/listcartItem",
  async (payload, thunkAPI) => {
    const request = {
      brand_id: payload.brand_id,
      quantity: payload.quantity,
      currency: payload.currency,
      giftcard_value: payload.giftcard_value,
      card_value_aed: payload.card_value_aed,
      isforself: payload.isforself,
      country_id: payload.country_id,
    };
    const response = await cartItemsService(request);
    return response;
  }
);

export const fetchItemsByCartAction = createAsyncThunk(
  "cart_items/listfetchcart",
  async (payload, thunkAPI) => {
    const request = {
      currency: payload.currency,
      currency_id: payload.currency_id,
    };
    const response = await fetchItemsByCartService(request);
    return response;
  }
);

export const addRemoveQuantityAction = createAsyncThunk(
  "cart_items/listaddremove",
  async (payload, thunkAPI) => {
    const request = {
      brand_id: payload.brand_id,
      quantity: payload.quantity,
      giftcard_value: payload.giftcard_value,
      currency: payload.currency,
      action: payload.action,
    };
    const response = await addRemoveQuantityService(request);
    return response;
  }
);

export const cartTotalCountAction = createAsyncThunk(
  "cart_items/listcountTotal",
  async (payload, thunkAPI) => {
    const request = {
      currency: payload.currency,
    };
    const response = await cartTotalCountService(request);
    return response;
  }
);
