import { createAsyncThunk } from "@reduxjs/toolkit";
import { pageLoaderActions } from "../reducer/page-loader.reducer";
import { categorylistAPI } from "../services/category.service";
import { giftcard_units } from "../services/category.service";

export const categoryAction = createAsyncThunk(
  "category/listCategories",
  async (payload, thunkAPI) => {
    const { dispatch } = thunkAPI;
    dispatch(pageLoaderActions.setPageLoadingAction(true));
    const request = {
      currency: payload.currency,
      program_id: payload.program_id,
    };
    const response = await categorylistAPI(request);
    dispatch(pageLoaderActions.setPageLoadingAction(false));
    return response;
  }
);

export const giftcardUnitAction = createAsyncThunk(
  "giftcard/units",
  async (payload, thunkAPI) => {
    const { dispatch } = thunkAPI;
    dispatch(pageLoaderActions.setPageLoadingAction(true));
    const response = await giftcard_units();
    dispatch(pageLoaderActions.setPageLoadingAction(false));
    return response;
  }
);
