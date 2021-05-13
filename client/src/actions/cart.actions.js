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
    const { dispatch } = thunkAPI;
    const request = {
      currency: payload.currency,
      currency_id: payload.currency_id,
    };
    const response = await fetchItemsByCartService(request);
    dispatch(cartTotalCountAction(request));
    return response;
  }
);

export const addRemoveQuantityAction = createAsyncThunk(
  "cart_items/listaddremove",
  async (payload, thunkAPI) => {
    const { dispatch } = thunkAPI;
    const request = {
      cart_item: {
        brand_name: payload.product_name,
        quantity: payload.quantity,
        giftcard_value: payload.giftcard_value,
        currency: payload.currency,
        action: payload.action,
      },
    };
    const response = await addRemoveQuantityService(request);
    dispatch(
      fetchItemsByCartAction({
        currency: payload.country.unit_name_short,
        currency_id: payload.country.id,
      })
    );
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
    if (!request.cart_item.isforself) {
      request.cart_item["contact_email"] = payload.contact_email;
      request.cart_item["contact_name"] = payload.contact_name;
      request.cart_item["gift_message"] = payload.gift_message;
    }
    const response = await cartItemsService(request);
    dispatch(cartTotalCountAction({ currency: payload.currency }));
    return response;
  }
);

export const getPaymentCurrencyAction = createAsyncThunk(
  "cart_items/listPaymentCurrency",
  async (payload, thunkAPI) => {
    const { dispatch } = thunkAPI;
    const response = await getPaymentCurrencyService();
    if (response.code === 200) {
      dispatch(getConversionRateAction(response.data.currencies[0]));
    }
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
    dispatch(cartAction.updateSelectedCartCurrency(payload));
    const response = await getConversionRateService(request);
    return response;
  }
);
