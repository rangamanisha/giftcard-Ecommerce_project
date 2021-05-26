import {
  createEntityAdapter,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import { giftCardsUnitAction,giftCardThemeAction } from "../actions/giftcards.actions";

export const GIFTCARDS_INIT_STATE = {
  message: "",
  errors: "",
  giftingTo: "",
  currency: "1",
  dest_currency: "",
  source_currency: "",
  giftunit_id: 1,
  countries: [],
  selectedCountry: null,
  selectedBrand: [],
  theme:[],
  selectedCurrency: undefined,
  conversion: undefined,
};

export const GIFTCARD_REDUCER = "giftCards";
export const giftcardsAdaptor = createEntityAdapter();
export const initialGiftcardState =
  giftcardsAdaptor.getInitialState(GIFTCARDS_INIT_STATE);

export const giftcardSlice = createSlice({
  name: GIFTCARD_REDUCER,
  initialState: GIFTCARDS_INIT_STATE,
  reducers: {
    setSelectCurreny(state, action) {
      state.selectedCurrency = action.payload;
    },
    setGiftingTo(state, action) {
      state.giftingTo = action.payload;
    },
    selectCountry(state, action) {
      let country = action.payload;
      state.selectedCountry = country;
    },
    selectBrand(state, action) {
      state.selectedBrand = action.payload;
    },
    removeSelectedCard(state, action) {
      state.selectedBrand = null;
    },
    selectDenomination(state, action) {
      state.selectedBrand.selectedDenomination = parseFloat(action.payload);
    },
  },
  removeSelectedCard(state, action) {
    state.selectedBrand = null;
  },

  extraReducers: (builder) => {
    builder
      .addCase(giftCardsUnitAction.pending, (state, action) => {
        state.errors = null;
        state.data = null;
      })
      .addCase(giftCardsUnitAction.fulfilled, (state, action) => {
        const response = action.payload;
        const { data, code, selectedCountry } = response;
        if (code === 200) {
          const gift_cards = data?.giftcard_units;
          state.countries = gift_cards;
          if (!state.selectedCountry) {
            state.selectedCountry = selectedCountry || null;
          }
        }
      })
      .addCase(giftCardsUnitAction.rejected, (state, action) => {
        state.errors = [action.error.message || ""];
      })
      .addCase(giftCardThemeAction.pending, (state, action) => {
        state.errors = null;
        state.theme = null;
      })
      .addCase(giftCardThemeAction.fulfilled, (state, action) => {
        const response = action.payload;
    
        if(response.code = 200){
          console.log(state);
          state.theme = response.gifting_category
        }
      })
      .addCase(giftCardThemeAction.rejected, (state, action) => {
        state.errors = null;
        state.theme = null;
      });
      
  },
});

export const giftCardsReducer = giftcardSlice.reducer;
export const giftCardsAction = giftcardSlice.actions;
export const { selectAll, selectEntities } = giftcardsAdaptor.getSelectors();
export const getGiftcardsState = (rootState) => rootState[GIFTCARD_REDUCER];
export const selectAllGiftcards = createSelector(getGiftcardsState, selectAll);
export const selectAllGiftcardsEntities = createSelector(
  getGiftcardsState,
  selectEntities
);
