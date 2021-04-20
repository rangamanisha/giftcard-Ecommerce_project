import {createEntityAdapter, createSelector, createSlice} from "@reduxjs/toolkit";
import {giftCardsUnitAction} from '../actions/gitCards.actions';
import {filter, get} from 'lodash'


export const GIFTCARDS_INIT_STATE = {
    message: "",
    errors: null,
    currency: "1",
    amount: null,
    dest_currency: "",
    source_currency:"",
    giftunit_id: 1,
    countries: [],
    selectedCountry: ''
}

export const GIFTCARD_REDUCER = 'giftCards';
export const giftcardsAdaptor = createEntityAdapter();
export const initialGiftcardState = giftcardsAdaptor.getInitialState(GIFTCARDS_INIT_STATE);

export const giftcardSlice = createSlice({
    name: GIFTCARD_REDUCER,
    initialState: GIFTCARDS_INIT_STATE,
    reducers: {
        selectCountry(state, action){
            let id = filter(state.countries, {country_name:action.payload})[0].id
            state.giftunit_id = id;
            state.selectedCountry = action.payload;
        } 
    },
    extraReducers: (builder) => {
        builder.addCase(giftCardsUnitAction.pending, (state, action) => {
            state.errors = null;
            state.data = null;
        })
        .addCase(giftCardsUnitAction.fulfilled, (state, action) => {
            const response = action.payload;
            const {data, code} = response;
            if(200 === code){
                const gift_cards = get(data, 'giftcard_units');
                state.countries = gift_cards
            }
        })
        .addCase(giftCardsUnitAction.rejected, (state, action) => {
            state.errors = [action.error.message || '']
        })
    }
})

export const giftCardsReducer = giftcardSlice.reducer;
export const giftCardsAction = giftcardSlice.actions
export const {selectAll, selectEntities} = giftcardsAdaptor.getSelectors();
export const getGiftcardsState = (rootState) => rootState[GIFTCARD_REDUCER];
export const selectAllGiftcards = createSelector(getGiftcardsState, selectAll);
export const selectAllGiftcardsEntities = createSelector(getGiftcardsState, selectEntities);