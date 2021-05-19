import { createAsyncThunk } from "@reduxjs/toolkit";
import { commonActions } from "../reducer/common.reducer";
import { pageLoaderActions } from "../reducer/page-loader.reducer";
import { contactUsAPI } from "../services/common.service";

export const contactUsAction = createAsyncThunk(
  "common/contactus/send",
  async (payload, thunkAPI) => {
    const { dispatch } = thunkAPI;
    dispatch(pageLoaderActions.setPageLoadingAction(true));
    const response = await contactUsAPI(payload);
    dispatch(commonActions.updateContact(response?.message));
    dispatch(pageLoaderActions.setPageLoadingAction(false));
    return response;
  }
);
