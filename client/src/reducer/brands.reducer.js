import {termBrandAction, productDescriptionAction, featureBrandsAction, brandsByCategoryAction, allBrandAction} from '../actions/brands.action';
import constants from '../constants/brands.constants';
import _ from 'lodash';
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
            const {data, status} = response;
            if(200 == status){
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
            const {data, status} = response;
            if(200 == status){
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
            const {data, status} = response;
            if(200 == status){
                state.brands = data;
            }
            state.brands = response
        })
        .addCase(featureBrandsAction.rejected, (state, action) => {
            state.errors = [action.error.message || '']
        })
        .addCase(brandsByCategoryAction.pending, (state, action) => {
            state.errors = null;
            state.brands = null;
        })
        .addCase(brandsByCategoryAction.fulfilled, (state, action) => {
            const response = action.payload;
            const {data, status} = response;
            if(200 == status) {
                state.brands = data;
            }
            state.brands = response
        })
        .addCase(brandsByCategoryAction.rejected, (state, action) => {
            const response = action.payload;
            const {data, status} = response;
            if(200 == status){
                state.brands = data;
            }
            state.brands = response
        })
        .addCase(allBrandAction.pending, (state, action) => {
            state.errors = null;
            state.brands = null;
        })
        .addCase(allBrandAction.fulfilled, (state, action) => {
            const response = action.payload;
            const {data, status} = response;
            if(200 == status){
                state.brands = data;
            }
            state.brands = response
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
