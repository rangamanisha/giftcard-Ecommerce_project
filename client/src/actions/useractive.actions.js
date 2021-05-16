import { createAsyncThunk } from "@reduxjs/toolkit";
import { authActions } from "../reducer/auth.reducer";
import { userActiveAPI } from "../services/useractive.service";

export const getuseractiveAction = createAsyncThunk(
  "useractive/put",
  async (payload, thunkAPI) => {
    const { dispatch } = thunkAPI;
    const request = {
      token: payload.token,
    };
    const response = await userActiveAPI(request);
    if (response.code === 200 && response.data.user_email) {
      await dispatch(authActions.setAuthState({ ...response.data.user_email }));
    }
    return response;
  }
);
