import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  idcSigninApiCall,
  idcConvertedCurrencyApiCall,
  idcCountriesApiCall,
  idcTotalCreditApiCall,
  idcVaritiesApiCall,
  idcChangePasswordApiCall,
  idcProfileApiCall,
  idcSingleOrderApiCall,
  countryCodeApiCall,
} from "../services/idc.service";

export const IdcSignInAction = createAsyncThunk(
  "idc_signin",
  async (payload, thunkAPI) => {
    const request = {
      signin: {
        email: payload.email,
        password: payload.password,
      },
    };
    const response = await idcSigninApiCall(request);
    return response;
  }
);
export const IdcChangePasswordAction = createAsyncThunk(
  "idc_password",
  async (payload, thunkAPI) => {
    const request = {
      change_password: {
        current_password: payload.current_password,
        password: payload.password,
        password_confirmation: payload.password_confirmation,
      },
    };
    const response = await idcChangePasswordApiCall(request);
    return response;
  }
);
export const IdcConvertCurrencyAction = createAsyncThunk(
  "idc_currency_change",
  async (payload, thunkAPI) => {
    const request = {
      source: payload.source.idccurrency,
      amount: payload.amount,
      dest: payload.dest,
      margin: payload.margin,
    };
    const response = await idcConvertedCurrencyApiCall(request);
    return response;
  }
);

export const IdcSignleOrderAction = createAsyncThunk(
  "idc_order",
  async (payload, thunkAPI) => {
    const request = {
      idc_orders: {
        first_name: payload.first_name,
        last_name: payload.last_name,
        email: payload.email,
        company_title: payload.company_title,
        company_name: payload.company_name,
        country: payload.country,
        phone: payload.phone,
        product: payload.product,
        quantity: payload.quantity,
        denomination: payload.denomination.denomination,
        giftcard_variety_id: payload.giftcard_variety_id.giftcard_variety_id,
      },
    };
    const response = await idcSingleOrderApiCall(request);
    return response;
  }
);
export const IdcCountryCode = createAsyncThunk(
  "idc_country",
  async (payload, thunkAPI) => {
    const request = {
      country: payload.country,
    };
    const response = await countryCodeApiCall(request);
    return response;
  }
);
export const IdcTotalCreditnAction = createAsyncThunk(
  "idc_credits",
  async (payload, thunkAPI) => {
    const response = await idcTotalCreditApiCall();
    return response;
  }
);
export const IdcVaritiesAction = createAsyncThunk(
  "idc_varities",
  async (payload, thunkAPI) => {
    const response = await idcVaritiesApiCall();
    return response;
  }
);
export const IdcProfileAction = createAsyncThunk(
  "idc_profile",
  async (payload, thunkAPI) => {
    const response = await idcProfileApiCall();
    return response;
  }
);
export const IdcCountriesAction = createAsyncThunk(
  "idc_countries",
  async (payload, thunkAPI) => {
    const response = await idcCountriesApiCall();
    return response;
  }
);
