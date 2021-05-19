import { createAsyncThunk } from "@reduxjs/toolkit";
import { commonActions } from "../reducer/common.reducer";
import { contactUsAPI } from "../services/common.service";

export const contactUsAction = createAsyncThunk(
  "common/contactus/send",
  async (payload, thunkAPI) => {
    const { dispatch } = thunkAPI;
    const response = await contactUsAPI(payload);
    dispatch(commonActions.updateContact(response?.data?.contact_us));
    return response;
  }
);
