import {createAsyncThunk} from "@reduxjs/toolkit";
import {giftCardsUnitService, getConversionRateService, getPaymentCurrencyService} from "../services/giftCards.service";

export const giftCardsUnitAction = createAsyncThunk('gitfcards/listGiftCards', async(payload, thunkAPI)=> {
    
    const resposne = await giftCardsUnitService();
    return resposne;
});

export const getConversionRateAction = createAsyncThunk('giftcards/listGiftCards', async(payload, thunkAPI) => {
    const request = {
        currency:payload.currency
    }
    const response = await getConversionRateService(request);
    return response;
})

export const getPaymentCurrencyAction = createAsyncThunk('giftcards/listGiftCards', async(payload, thunkAPI) => {
    const response = await getPaymentCurrencyService();
    return response;
})