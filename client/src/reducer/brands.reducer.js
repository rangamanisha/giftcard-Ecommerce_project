import {
  termBrandAction,
  descriptionBrandAction,
  featureBrandsAction,
  brandsByCategoryAction,
  allBrandAction,
} from "../actions/brands.action";
import { get } from "lodash";
import {
  createEntityAdapter,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";

export const BRANDS_INIT_STATE = {
  message: "",
  errors: null,
  brands: null,
  currency: "",
  program_id: "1",
  image_size: null,
  image_type: false,
  list_type: false,
  category_id: "",
  id: "",
  brand_id: "",
  terms: [],
  allBrands: [],
};

export const BRAND_REDUCER = "brands";
export const brandsAdaptor = createEntityAdapter();
export const initialBrandsState =
  brandsAdaptor.getInitialState(BRANDS_INIT_STATE);

export const brandsSlice = createSlice({
  name: BRAND_REDUCER,
  initialState: BRANDS_INIT_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(termBrandAction.pending, (state, action) => {
        state.errors = null;
        state.terms = null;
      })
      .addCase(termBrandAction.fulfilled, (state, action) => {
        const response = action.payload;
        const { data, code } = response;
        if (200 === code) {
          let terms = get(data, "terms");
          state.terms = terms;
        }
      })
      .addCase(termBrandAction.rejected, (state, action) => {
        state.errors = [action.error.message || ""];
      })
      .addCase(descriptionBrandAction.pending, (state, action) => {
        state.errors = null;
        state.description = null;
      })
      .addCase(descriptionBrandAction.fulfilled, (state, action) => {
        const response = action.payload;
        const { data, code } = response;
        if (code === 200) {
          state.description = data;
        }
      })
      .addCase(descriptionBrandAction.rejected, (state, action) => {
        state.errors = [action.error.message || ""];
      })
      .addCase(featureBrandsAction.pending, (state, action) => {
        state.errors = null;
        state.brands = null;
      })
      .addCase(featureBrandsAction.fulfilled, (state, action) => {
        const response = action.payload;
        const { data, code } = response;
        if (code === 200) {
          state.featured_brands = data;
        }
      })
      .addCase(featureBrandsAction.rejected, (state, action) => {
        state.errors = [action.error.message || ""];
      })
      .addCase(brandsByCategoryAction.pending, (state, action) => {
        state.errors = null;
      })
      .addCase(brandsByCategoryAction.fulfilled, (state, action) => {
        const response = action.payload;
        const { data, code } = response;
        if (code === 200) {
          state.brands = get(data, "brands");
        }
      })
      .addCase(brandsByCategoryAction.rejected, (state, action) => {
        state.errors = [action.error.message || ""];
      })
      .addCase(allBrandAction.pending, (state, action) => {
        state.errors = null;
        state.brands = null;
        state.allBrands = null;
      })
      .addCase(allBrandAction.fulfilled, (state, action) => {
        const response = action.payload;
        const { data, code } = response;
        if (code === 200) {
          state.allBrands = data.categories;
        }
      })
      .addCase(allBrandAction.rejected, (state, action) => {
        state.errors = [action.error.message || ""];
      });
  },
});

export const brandsReducer = brandsSlice.reducer;
export const { selectAll, selectEntities } = brandsAdaptor.getSelectors();
export const getBrandsState = (rootState) => rootState[BRAND_REDUCER];
export const selectAllBrands = createSelector(getBrandsState, selectAll);
export const selectBrandsEntities = createSelector(
  getBrandsState,
  selectEntities
);
