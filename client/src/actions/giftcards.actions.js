import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  giftCardsUnitService,
  getConversionRateService,
} from "../services/giftCards.service";

export const giftCardsUnitAction = createAsyncThunk(
  "gitfcards/listGiftCards",
  async (payload, thunkAPI) => {
    const resposne = await giftCardsUnitService();
    return resposne;
  }
);

// export const getConversionRateAction = createAsyncThunk(
//   "giftcards/listPaymentConversions",
//   async (payload, thunkAPI) => {
//     const request = {
//       currency: payload,
//     };
//     const response = await getConversionRateService(request);
//     return response;
//   }
// );

// export const getPaymentCurrencyAction = createAsyncThunk(
//   "giftcards/listPaymentCurrency",
//   async (payload, thunkAPI) => {
//     const response = await getPaymentCurrencyService();
//     return response;
//   }
// );
