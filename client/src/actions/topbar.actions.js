/* eslint-disable no-unused-vars */

import { createAsyncThunk } from "@reduxjs/toolkit";
import { pageLoaderActions } from "../reducer/page-loader.reducer";
import { getCountriesAPI } from "../services/topbar.service";
import { giftCardsUnitAction } from "./giftcards.actions";

export const getCountriesListAction = createAsyncThunk(
  "topbar/countrylist/get",
  async (payload = {}, thunkAPI) => {
    const { dispatch } = thunkAPI;
    dispatch(pageLoaderActions.setPageLoadingAction(true));
    const response = await getCountriesAPI();
    await dispatch(giftCardsUnitAction());
    dispatch(pageLoaderActions.setPageLoadingAction(false));
    return response;
  }
);
