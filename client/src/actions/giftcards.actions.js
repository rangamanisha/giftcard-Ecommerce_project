import { createAsyncThunk } from "@reduxjs/toolkit";
import { giftCardsUnitService } from "../services/giftCards.service";

export const giftCardsUnitAction = createAsyncThunk(
  "gitfcards/listGiftCards",
  async (payload, thunkAPI) => {
    const response = await giftCardsUnitService();
    return response;
  }
);
