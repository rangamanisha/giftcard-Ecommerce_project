import {createEntityAdapter, createSelector, createSlice} from "@reduxjs/toolkit";
import {giftCardsUnitAction} from '../actions/gitCards.actions';
import {get} from 'lodash'
import { categoryAdaptor, CATEGORY_INIT_STATE } from "./category.reducer";

export const GIFTCARDS_INIT_STATE = {
    message: "",
    errors: null,
    data: null,
    currency: "1",
    amount: null,
    dest_currency: "",
    source_currency:""
}

export const GIFTCARD_REDUCER = 'giftCards';
export const giftcardsAdaptor = createEntityAdapter();
export const initialGiftcardState = giftcardsAdaptor.getInitialState(GIFTCARDS_INIT_STATE);

export const giftcardSlice = createSlice({
    name: GIFTCARD_REDUCER,
    initialState: CATEGORY_INIT_STATE,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(giftCardsUnitAction.pending, (state, action) => {
            state.errors = null;
            state.data = null;
        })
        .addCase(giftCardsUnitAction.fulfilled, (state, action) => {
            const response = action.payload;
            const {data, code} = response;
            if(200 == code){
                state.data = get(data, 'giftCards');
            }
        })
        .addCase(giftCardsUnitAction.rejected, (state, action) => {
            state.errors = [action.error.message || '']
        })
    }
})

export const giftCardsReducer = giftcardSlice.reducer;
export const {selectAll, selectEntities} = categoryAdaptor.getSelectors();
export const getGiftcardsState = (rootState) => rootState[GIFTCARD_REDUCER];
export const selectAllGiftcards = createSelector(getGiftcardsState, selectAll);
export const selectAllGiftcardsEntities = createSelector(getGiftcardsState, selectEntities);