import {
  cartItemAction,
  fetchItemsByCartAction,
  addRemoveQuantityAction,
  cartTotalCountAction,
} from "../actions/cart.actions";
import {
  createEntityAdapter,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import { indexOf, map, remove } from "lodash";

export const CART_ITEMS_INIT_STATE = {
  message: "",
  errors: null,
  cart_items: null,
  card_value_aed: null,
  gift_message: null,
  country_name: "",
  count: 1,
  lineItems: [],
};

export const CART_ITEMS_REDUCER = "cart_items";
export const cartItemsAdaptor = createEntityAdapter();
export const initialCartItemState = cartItemsAdaptor.getInitialState(
  CART_ITEMS_INIT_STATE
);

export const cartItemsSlice = createSlice({
  name: CART_ITEMS_REDUCER,
  initialState: CART_ITEMS_INIT_STATE,
  reducers: {
    increaseCount(state) {
      state.count = state.count + 1;
    },
    updateLineItem(state, action) {
      const lineItem = action.payload;
      const index = indexOf(
        map(state.lineItems, (_) => _.id),
        lineItem.id
      );
      const { count } = lineItem;
      if (count < 1) {
        state.lineItems.splice(index, 1);
      } else state.lineItems[index] = lineItem;
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
        state.fetch_items_by_cart = null;
      })
      .addCase(fetchItemsByCartAction, (state, action) => {
        const response = action.payload;
        const { data, code } = response;
        if (200 === code) {
          state.fetch_items_by_cart = data;
        }
      })
      .addCase(fetchItemsByCartAction.rejected, (state, action) => {
        state.errros = [action.error.message || ""];
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
        state.cart_total_count = null;
      })
      .addCase(cartTotalCountAction.fulfilled, (state, action) => {
        const response = action.payload;
        const { data, code } = response;
        if (200 === code) {
          state.cart_total_count = data;
        }
      })
      .addCase(cartTotalCountAction.rejected, (state, action) => {
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
