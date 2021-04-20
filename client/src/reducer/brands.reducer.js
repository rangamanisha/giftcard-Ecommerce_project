import {termBrandAction, productDescriptionAction, featureBrandsAction, brandsByCategoryAction, allBrandAction} from '../actions/brands.action';
import constants from '../constants/brands.constants';
import {get} from 'lodash';
import {createEntityAdapter, createSelector, createSlice} from "@reduxjs/toolkit";

export const BRANDS_INIT_STATE = {
    message: "",
    errors: null,
    brands: null,
    currency:"1",
    program_id:'1',
    image_size:null,
    image_type:false,
    list_type:false,
    category_id:"",
    id:''
}

export const BRAND_REDUCER = "brands";
export const brandsAdaptor = createEntityAdapter();
export const initialBrandsState = brandsAdaptor.getInitialState(BRANDS_INIT_STATE);

export const brandsSlice = createSlice({
    name: BRAND_REDUCER,
    initialState: BRANDS_INIT_STATE,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(termBrandAction.pending, (state,action) => {
            state.errors = null;
            state.brands = null;
        })
        .addCase(termBrandAction.fulfilled, (state, action) => {
            const response = action.payload;
            const {data, code} = response;
            if(200 == code){
                state.brands = data;
            }
            state.brands = response
        })
        .addCase(termBrandAction.rejected, (state, action) => {
            state.errors = [action.error.message || '']
        })
        .addCase(productDescriptionAction.pending, (state, action) => {
            state.errors = null;
            state.brands = null;
        })
        .addCase(productDescriptionAction.fulfilled, (state, action) => {
            const response = action.payload;
            const {data, code} = response;
            if(200 == code){
                state.brands = data;
            }
            state.brands = response;
        })
        .addCase(featureBrandsAction.pending, (state, action) => {
            state.errors = null;
            state.brands = null;
        })
        .addCase(featureBrandsAction.fulfilled, (state, action) => {
            const response = action.payload;
            const {data, code} = response;
            if(200 == code){
                state.featured_brands = data;
            }
        })
        .addCase(featureBrandsAction.rejected, (state, action) => {
            state.errors = [action.error.message || '']
        })
        .addCase(brandsByCategoryAction.pending, (state, action) => {
            state.errors = null;
        })
        .addCase(brandsByCategoryAction.fulfilled, (state, action) => {
            const response = action.payload;
            const {data, code} = response;
            if(200 == code) {
                state.brands = get(data, 'brands');
            }
        })
        .addCase(brandsByCategoryAction.rejected, (state, action) => {
           state.errors = [action.error.message || ''] 
        })
        .addCase(allBrandAction.pending, (state, action) => {
            state.errors = null;
            state.brands = null;
            state.allBrands = null;
        })
        .addCase(allBrandAction.fulfilled, (state, action) => {
            const response = action.payload;
            const {data, code} = response;
            if(200 == code){
                state.allBrands = data.categories;
            }
        })
        .addCase(allBrandAction.rejected, (state, action) => {
            state.errors = [action.error.message || '']
        })
    }
});

export const brandsReducer = brandsSlice.reducer;
export const {selectAll, selectEntities} = brandsAdaptor.getSelectors();
export const getBrandsState = (rootState) => rootState[BRAND_REDUCER];
export const selectAllBrands = createSelector(getBrandsState, selectAll);
export const selectBrandsEntities = createSelector(getBrandsState, selectEntities);

