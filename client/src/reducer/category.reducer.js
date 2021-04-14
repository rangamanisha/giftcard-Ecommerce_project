// import {createEntityAdapter, createSelector, createSlice} from "@reduxjs/toolkit";
// import { categoryAction } from '../actions/category.actions';

// export const CATEGORY = {
//     message:"",
//     errors:null,
//     category:null,
//     currency:"1",
//     program_id:"1",
//     image_size:null,
//     image_type:false,
//     list_type:false
// }

// export const GET_CATEGORY = 'category';
// export const categoryAdaptor = createEntityAdapter();
// export const initialCategoryState = categoryAdaptor.getInitialState(CATEGORY);

// export const categorySlice = createSlice({
//     name: CATEGORY,
//     initialState: GET_CATEGORY,
//     reducers: {},
//     extraReducers: (builder) => {
//         builder.addCase(categoryAction.pending, (state,action)=>{
//             state.errors = null;
//             state.category = null;
//         })
//         .addCase(categoryAction.fulfilled, (state, action) => {
//             const response = action.payload;
//             state.category = response 
//         })
//         .addCase(categoryAction.rejected, (state, action) => {
//             state.errors = [action.error.message || '']
//         })
        
//     }
// });

// export const categoryReducer = categorySlice.reducer;
// export const {selectAll, selectEntities} = categoryAdaptor.getSelectors();
// export const getCategoryState = (rootState) => rootState[CATEGORY];
// export const selectAllCategory = createSelector(getCategoryState, selectAll);
// export const selectCategoryEntities = createSelector(getCategoryState, selectEntities);