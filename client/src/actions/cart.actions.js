import { createAsyncThunk } from "@reduxjs/toolkit";
import { cartAction } from "../reducer/cart.reducer";
import {
  cartItemsService,
  fetchItemsByCartService,
  addRemoveQuantityService,
  cartTotalCountService,
} from "../services/cart.service";
import {
  getConversionRateService,
  getPaymentCurrencyService,
} from "../services/giftCards.service";

export const cartItemAction = createAsyncThunk(
  "cart_items/listcartItem",
  async (payload, thunkAPI) => {
    const request = {
      cart_item: {
        brand_id: payload.brand_id,
        quantity: payload.quantity,
        currency: payload.currency,
        giftcard_value: payload.giftcard_value,
        card_value_aed: payload.card_value_aed,
        isforself: payload.isforself,
        country_id: payload.country_id,
      },
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
      cart_item: {
        brand_name: payload.data.brand_name,
        quantity: payload.data.quantity,
        giftcard_value: payload.data.giftcard_value,
        currency: payload.data.currency,
        action: payload.data.action,
      },
    };
    const { dispatch } = thunkAPI;
    const { removeLineItem, updateLineItem } = cartAction;
    const response = await addRemoveQuantityService(request);
    if (payload.data.action === "CLEAR") {
      await dispatch(removeLineItem(payload.item));
    } else {
      const data = payload.item;
      if (payload.data.action === "ADD") {
        data.quantity = data.quantity + 1;
      }
      if (payload.data.action === "REMOVE") {
        data.quantity = data.quantity - 1;
      }
      await dispatch(updateLineItem(data));
    }
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

export const updateCartAction = createAsyncThunk(
  "cart_items/update",
  async (payload, thunkAPI) => {
    const { dispatch } = thunkAPI;
    const request = {
      cart_item: {
        brand_id: payload.brand_id,
        quantity: payload.quantity,
        currency: payload.currency,
        giftcard_value: payload.giftcard_value,
        card_value_aed: payload.card_value_aed,
        isforself: payload.isforself,
        country_id: payload.country_id,
      },
    };
    const response = await cartItemsService(request);
    dispatch(cartTotalCountAction());
    return response;
  }
);

export const getPaymentCurrencyAction = createAsyncThunk(
  "cart_items/listPaymentCurrency",
  async (payload, thunkAPI) => {
    const response = await getPaymentCurrencyService();
    return response;
  }
);

export const getConversionRateAction = createAsyncThunk(
  "cart_items/listPaymentConversions",
  async (payload, thunkAPI) => {
    const request = {
      currency: payload.id,
    };
    const { dispatch } = thunkAPI;
    console.log("inside getConversionRateAction");
    dispatch(cartAction.updateSelectedCartCurrency(payload));
    const response = await getConversionRateService(request);
    return response;
  }
);
