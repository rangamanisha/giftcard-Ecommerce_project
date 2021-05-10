import {
  createEntityAdapter,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import {
  giftCardsUnitAction,
  getPaymentCurrencyAction,
  getConversionRateAction,
} from "../actions/giftcards.actions";

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
  selectedCurrency: undefined,
  conversion: undefined,
};

export const GIFTCARD_REDUCER = "giftCards";
export const giftcardsAdaptor = createEntityAdapter();
export const initialGiftcardState = giftcardsAdaptor.getInitialState(
  GIFTCARDS_INIT_STATE
);

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
      console.log('country ', country);
      state.giftunit_id = country?.id || 1;
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
        const { data, code } = response;
        if (200 === code) {
          const gift_cards = data?.giftcard_units;
          state.countries = gift_cards;
          if (!state.selectedCountry) {
            state.selectedCountry = gift_cards[0];
          }
        }
      })
      .addCase(giftCardsUnitAction.rejected, (state, action) => {
        state.errors = [action.error.message || ""];
      })
      .addCase(getPaymentCurrencyAction.pending, (state, action) => {
        state.errors = null;
        state.paymentCurrency = null;
      })
      .addCase(getPaymentCurrencyAction.fulfilled, (state, action) => {
        const response = action.payload;
        const { data, code } = response;
        if (200 === code) {
          state.paymentCurrency = data;
        }
      })
      .addCase(getPaymentCurrencyAction.rejected, (state, action) => {
        state.errors = [action.error.message || ""];
      })
      .addCase(getConversionRateAction.pending, (state, action) => {
        state.errors = null;
        state.conversion = null;
      })
      .addCase(getConversionRateAction.fulfilled, (state, action) => {
        const response = action.payload;
        const { data, code } = response;
        if (200 === code) {
          state.conversion = data;
        }
      })
      .addCase(getConversionRateAction.rejected, (state, action) => {
        state.errors = [action.error.message || ""];
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
