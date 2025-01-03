import {
  createEntityAdapter,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import { categoryAction } from "../actions/category.actions";
import { giftcardUnitAction } from "../actions/category.actions";
import { get } from "lodash";

export const CATEGORY_INIT_STATE = {
  message: "",
  errors: null,
  data: null,
  currency: 226,
  program_id: "1",
  image_size: null,
  image_type: false,
  list_type: false,
  category_id: 19,
};

export const CATEGORY_REDUCER = "category";
export const categoryAdaptor = createEntityAdapter();
export const initialCategoryState =
  categoryAdaptor.getInitialState(CATEGORY_INIT_STATE);

export const categorySlice = createSlice({
  name: CATEGORY_REDUCER,
  initialState: CATEGORY_INIT_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(categoryAction.pending, (state, action) => {
        state.errors = null;
        state.data = null;
      })
      .addCase(categoryAction.fulfilled, (state, action) => {
        const response = action.payload;
        const { data, code } = response;
        if (code === 200) {
          state.data = get(data, "categories");
        }
      })
      .addCase(categoryAction.rejected, (state, action) => {
        state.errors = [action.error.message || ""];
      })
      .addCase(giftcardUnitAction.pending, (state, action) => {
        state.errors = null;
        state.giftcardunits = null;
      })
      .addCase(giftcardUnitAction.fulfilled, (state, action) => {
        const response = action.payload;
        const { data, code } = response;
        if (code === 200) {
          state.giftcardunits = get(data, "giftcard_units");
        }
      })
      .addCase(giftcardUnitAction.rejected, (state, action) => {
        state.giftcardunits = [action.error.message || ""];
      });
  },
});

export const categoryReducer = categorySlice.reducer;
export const { selectAll, selectEntities } = categoryAdaptor.getSelectors();
export const getCategoryState = (rootState) => rootState[CATEGORY_REDUCER];
export const selectAllCategory = createSelector(getCategoryState, selectAll);
export const selectCategoryEntities = createSelector(
  getCategoryState,
  selectEntities
);
