import { createAsyncThunk } from "@reduxjs/toolkit";
import { getRewardPointsAPI, getTransactionsAPI, getConvertAPI, getRemainingAPI, getConvertCreditsAPI } from "../services/rewardpoints.service";

export const getRewardPointsAction = createAsyncThunk('rewardpoints/get', async (payload, thunkAPI) => {
    const response = await getRewardPointsAPI();
    return response;
});

export const getTransactionsAction = createAsyncThunk('transcations/get', async (payload, thunkAPI) => {
    const response = await getTransactionsAPI();
    return response;
});

export const getConvertAction = createAsyncThunk('giftcardconvert/get', async (payload, thunkAPI) => {
    const request = 
    {
        giftcard_number: payload.giftcard_number
    }
    const response = await getConvertAPI(request);
    return response;
});

export const getRemainingAction = createAsyncThunk('giftcardremaining/get', async (payload, thunkAPI) => {
    const request = 
    {
        giftcard_number: payload.giftcard_number
    }
    const response = await getRemainingAPI(request);
    return response;
});


export const getConvertCreditsAction = createAsyncThunk('giftcardconvert/post', async (payload, thunkAPI) => {
    const request = 
    {
        mylist_card:{
            card_number: payload.giftcard_number
        }
     }
    const response = await getConvertCreditsAPI(request);
    return response;
});

