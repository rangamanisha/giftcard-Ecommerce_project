import {createAsyncThunk} from '@reduxjs/toolkit';
import {idcSigninApiCall ,idcTotalCreditApiCall ,idcVaritiesApiCall,idcProfileApiCall,idcSingleOrderApiCall,countryCodeApiCall} from '../services/idc.service';

export const IdcSignInAction = createAsyncThunk('idc_signin', async(payload, thunkAPI) => {
    const request = {
        signin: {
            email: payload.email,
            password: payload.password,
          },
    }
    const response = await idcSigninApiCall(request);
    return response;
});

export const IdcSignleOrderAction = createAsyncThunk('idc_order', async(payload, thunkAPI) => {
    const request = {
        idc_orders: {
          first_name: payload.first_name,
          last_name: payload.last_name,
          email:payload.email,
          company:payload.company,
          designation:payload.designation,
          mobile_number:payload.mobile_number,
          quantity :payload.quantity,
          denomination:300,
          giftcard_variety_id:1717
          },
    }
    const response = await idcSingleOrderApiCall(request);
    return response;
});
export const IdcCountryCode = createAsyncThunk('idc_country', async(payload, thunkAPI) => {
    const request = {
        country : payload.country
    }
    const response = await countryCodeApiCall(request);
    return response;
});
export const IdcTotalCreditnAction = createAsyncThunk('idc_credits', async(payload, thunkAPI) => {
    const response = await idcTotalCreditApiCall();
    return response;
});
export const IdcVaritiesAction = createAsyncThunk('idc_varities', async(payload, thunkAPI) => {
    const response = await idcVaritiesApiCall();
    return response;
});
export const IdcProfileAction = createAsyncThunk('idc_profile', async(payload, thunkAPI) => {
    const response = await idcProfileApiCall();
    return response;
});