import {createAsyncThunk} from '@reduxjs/toolkit';
import {idcSigninApiCall} from '../services/idc.service';

export const IdcSignInAction = createAsyncThunk('idc_signin', async(payload, thunkAPI) => {
    const request = {
        signin: {
            email: payload.email,
            password: payload.password,
          },
    }
    const response = await idcSigninApiCall(request);
    console.log(response);
    return response;
});