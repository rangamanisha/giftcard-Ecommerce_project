import { createAsyncThunk } from "@reduxjs/toolkit";
import { pageLoaderActions } from "../reducer/page-loader.reducer";
import {
  getRewardPointsAPI,
  getTransactionsAPI,
  getConvertAPI,
  getRemainingAPI,
  getConvertCreditsAPI,
} from "../services/rewardpoints.service";

export const getRewardPointsAction = createAsyncThunk(
  "rewardpoints/get",
  async (payload, thunkAPI) => {
    const { dispatch } = thunkAPI;
    dispatch(pageLoaderActions.setPageLoadingAction(true));
    const response = await getRewardPointsAPI();
    dispatch(pageLoaderActions.setPageLoadingAction(false));
    return response;
  }
);

export const getTransactionsAction = createAsyncThunk(
  "transcations/get",
  async (payload, thunkAPI) => {
    const { dispatch } = thunkAPI;
    dispatch(pageLoaderActions.setPageLoadingAction(true));
    const response = await getTransactionsAPI();
    dispatch(pageLoaderActions.setPageLoadingAction(false));
    return response;
  }
);

export const getConvertAction = createAsyncThunk(
  "giftcardconvert/get",
  async (payload, thunkAPI) => {
    const { dispatch } = thunkAPI;
    dispatch(pageLoaderActions.setPageLoadingAction(true));
    const request = {
      giftcard_number: payload.giftcard_number,
    };
    const response = await getConvertAPI(request);
    dispatch(pageLoaderActions.setPageLoadingAction(false));
    return response;
  }
);

export const getRemainingAction = createAsyncThunk(
  "giftcardremaining/get",
  async (payload, thunkAPI) => {
    const { dispatch } = thunkAPI;
    dispatch(pageLoaderActions.setPageLoadingAction(true));
    const request = {
      giftcard_number: payload.giftcard_number,
    };
    const response = await getRemainingAPI(request);
    dispatch(pageLoaderActions.setPageLoadingAction(false));
    return response;
  }
);

export const getConvertCreditsAction = createAsyncThunk(
  "giftcardconvert/post",
  async (payload, thunkAPI) => {
    const { dispatch } = thunkAPI;
    dispatch(pageLoaderActions.setPageLoadingAction(true));
    const request = {
      mylist_card: {
        card_number: payload.giftcard_number,
      },
    };
    const response = await getConvertCreditsAPI(request);
    dispatch(pageLoaderActions.setPageLoadingAction(false));
    return response;
  }
);
