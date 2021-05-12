import { createAsyncThunk } from "@reduxjs/toolkit";
import { giftCardsUnitService } from "../services/giftCards.service";

export const giftCardsUnitAction = createAsyncThunk(
  "gitfcards/listGiftCards",
  async (payload = [], thunkAPI) => {
    const response = await giftCardsUnitService();
    const { getState } = thunkAPI;
    let selectedCountry = {};
    if (response.code === 200) {
      const state = getState();
      selectedCountry = response.data.giftcard_units[0];
      selectedCountry["country_id"] = state.topbar.countries.find(
        (country) => country.country_name === selectedCountry.country_name
      )?.id;
    }
    return { ...response, selectedCountry };
  }
);
