import {createEntityAdapter, createSelector, createSlice} from "@reduxjs/toolkit";
import { categoryAction } from '../actions/category.actions';
import _ from 'lodash';

export const CATEGORY_INIT_STATE = {
    message:"",
    errors:null,
    category:null,
    currency:"1",
    program_id:"1",
    image_size:null,
    image_type:false,
    list_type:false
}

export const CATEGORY_REDUCER = 'category';
export const categoryAdaptor = createEntityAdapter();
export const initialCategoryState = categoryAdaptor.getInitialState(CATEGORY_INIT_STATE);

export const categorySlice = createSlice({
    name: CATEGORY_REDUCER,
    initialState: CATEGORY_INIT_STATE,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(categoryAction.pending, (state,action)=>{
            state.errors = null;
            state.category = null;
        })
        .addCase(categoryAction.fulfilled, (state, action) => {
            const response = action.payload;
            const {data, status} = response;
            if(200 == status){
               state.catagory = data;
            }
        })
        .addCase(categoryAction.rejected, (state, action) => {
            state.errors = [action.error.message || '']
        })
        
    }
});

export const categoryReducer = categorySlice.reducer;
export const {selectAll, selectEntities} = categoryAdaptor.getSelectors();
export const getCategoryState = (rootState) => rootState[CATEGORY_REDUCER];
export const selectAllCategory = createSelector(getCategoryState, selectAll);
export const selectCategoryEntities = createSelector(getCategoryState, selectEntities);