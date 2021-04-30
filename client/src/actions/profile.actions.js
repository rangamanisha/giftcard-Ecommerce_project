import { createAsyncThunk } from "@reduxjs/toolkit";
import { getprofileAPI } from "../services/profile.service";

export const getprofileListAction = createAsyncThunk(
  "profile/get",
  async () => {
    const response = await getprofileAPI();
    return response;
  }
);
