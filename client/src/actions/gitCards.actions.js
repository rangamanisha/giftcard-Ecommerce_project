import {createAsyncThunk} from "@reduxjs/toolkit";
import {giftCardsUnitService, getConversionRateService, getPaymentCurrencyService} from "../services/giftCards.service";

export const giftCardsUnitAction = createAsyncThunk('gitfcards/listGiftCards', async(payload, thunkAPI)=> {
    
    const resposne = await giftCardsUnitService();
    return resposne;
});

export const getConversionRateAction = createAsyncThunk('giftcards/listPaymentConversions', async(payload, thunkAPI) => {
    const response = await getConversionRateService(payload);
    return response;
})

export const getPaymentCurrencyAction = createAsyncThunk('giftcards/listPaymentCurrency', async(payload, thunkAPI) => {
    const response = await getPaymentCurrencyService();
    return response;
})

