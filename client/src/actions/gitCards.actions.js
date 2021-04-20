import {createAsyncThunk} from "@reduxjs/toolkit";
import {giftCardsUnitService} from "../services/giftCards.service";

export const giftCardsUnitAction = createAsyncThunk('gitfcards/listGiftCards', async(payload, thunkAPI)=> {
    
    const resposne = await giftCardsUnitService();
    return resposne;
});