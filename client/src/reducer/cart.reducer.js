import {
  cartItemAction,
  fetchItemsByCartAction,
  addRemoveQuantityAction,
  cartTotalCountAction,
  getConversionRateAction,
} from "../actions/cart.actions";
import {
  createEntityAdapter,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import { remove } from "lodash";
import { getPaymentCurrencyAction } from "../actions/cart.actions";

export const CART_ITEMS_INIT_STATE = {
  message: "",
  errors: "",
  cart_items: [],
  gift_message: "",
  country_name: "",
  count: 1,
  lineItems: [],
  fetchedCartItems: [],
  totalCartItems: 0,
  selectedCartCurrency: null,
  paymentCurrency: [],
  conversion: null,
};

export const CART_ITEMS_REDUCER = "cart_items";
export const cartItemsAdaptor = createEntityAdapter();
export const initialCartItemState = cartItemsAdaptor.getInitialState(
  CART_ITEMS_INIT_STATE
);

export const cartItemsSlice = createSlice({
  name: CART_ITEMS_REDUCER,
  initialState: initialCartItemState,
  reducers: {
    increaseCount(state) {
      state.count = state.count + 1;
    },
    updateLineItem(state, action) {
      const { item, index } = action.payload;
      state.lineItems[index] = item;
    },
    decreaseCount(state, action) {
      state.count = state.count - 1;
    },
    setCountZero(state, action) {
      state.count = 1;
    },
    saveItemsToCart(state, action) {
      state.lineItems.push(action.payload);
    },
    removeLineItem(state, action) {
      const line_item = action.payload;
      remove(state.lineItems, line_item);
    },
    updateSelectedCartCurrency(state, action) {
      console.log("action ", action);
      state.selectedCartCurrency = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(cartItemAction.pending, (state, action) => {
        state.errros = null;
        state.cart_items = null;
      })
      .addCase(cartItemAction.fulfilled, (state, action) => {
        const response = action.payload;
        const { data, code } = response;
        if (200 === code) {
          state.cart_items = data;
        }
      })
      .addCase(cartItemAction.rejected, (state, action) => {
        state.errros = [action.error.message || ""];
      })
      .addCase(fetchItemsByCartAction.pending, (state, action) => {
        state.errors = null;
        state.fetchedCartItems = null;
      })
      .addCase(fetchItemsByCartAction.fulfilled, (state, action) => {
        const response = action.payload;
        console.log("response ", response);
        const { data, code } = response;
        if (code === 200) {
          state.fetchedCartItems = data.carts;
        } else {
          state.fetchedCartItems = [];
        }
      })
      .addCase(fetchItemsByCartAction.rejected, (state, action) => {
        state.errros = [action.error.message || ""];
        state.fetchedCartItems = [];
      })
      .addCase(addRemoveQuantityAction.pending, (state, action) => {
        state.errors = null;
        state.add_or_remove_quantity = null;
      })
      .addCase(addRemoveQuantityAction.fulfilled, (state, action) => {
        const response = action.payload;
        const { data, code } = response;
        if (200 === code) {
          state.add_or_remove_quantity = data;
        }
      })
      .addCase(addRemoveQuantityAction.rejected, (state, action) => {
        state.errors = [action.error.message || ""];
      })
      .addCase(cartTotalCountAction.pending, (state, action) => {
        state.errors = null;
        state.totalCartItems = 0;
      })
      .addCase(cartTotalCountAction.fulfilled, (state, action) => {
        const response = action.payload;
        const { data, code } = response;
        if (200 === code) {
          state.totalCartItems = data.count;
        }
      })
      .addCase(cartTotalCountAction.rejected, (state, action) => {
        state.errors = [action.error.message || ""];
      })
      // Payment CUrrency Action
      .addCase(getPaymentCurrencyAction.pending, (state) => {
        state.errors = null;
        state.paymentCurrency = [];
      })
      .addCase(getPaymentCurrencyAction.fulfilled, (state, action) => {
        const response = action.payload;
        const { data, code } = response;
        if (200 === code) {
          state.paymentCurrency = data?.currencies || [];
          state.selectedCartCurrency = data?.currencies[0] || null;
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

export const cartItemReducer = cartItemsSlice.reducer;
export const cartAction = cartItemsSlice.actions;
export const { selectAll, selectEntities } = cartItemsAdaptor.getInitialState();
export const getCartItemsState = (rootState) => rootState[CART_ITEMS_REDUCER];
export const selectAllCartItems = createSelector(getCartItemsState, selectAll);
export const selectCartItemsEntities = createSelector(
  getCartItemsState,
  selectEntities
);
