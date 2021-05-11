/* eslint-disable no-unused-vars */

import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCountriesAPI } from "../services/topbar.service";
import { giftCardsUnitAction } from "./giftcards.actions";

export const getCountriesListAction = createAsyncThunk(
  "topbar/countrylist/get",
  async (payload = {}, thunkAPI) => {
    const { dispatch } = thunkAPI;
    const response = await getCountriesAPI();
    dispatch(giftCardsUnitAction());
    return response;
  }
);
