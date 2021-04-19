/* eslint-disable no-unused-vars */

import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCountriesAPI } from '../services/topbar.service';

export const getCountriesListAction = createAsyncThunk(
  'topbar/countrylist/get',
  async (payload, thunkAPI) => {
    const response = await getCountriesAPI();
    return response;
  }
);
