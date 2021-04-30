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
import { cartItemsService } from "../services/cart.service";

export const CART_ITEMS_INIT_STATE = {
  message: "",
  errors: null,
  cart_items: null,
  brand_id: 845,
  quantity: 1,
  currency: "",
  gifycard_value: 200,
  card_value_aed: 2000,
  isforself: "",
  country_id: 6,
  id: 9,
  cart_id: 346,
  product_name: "",
  giftcard_style_id: null,
  contact_email: null,
  contact_phone: null,
  gift_message: null,
  country_name: "",
};

export const CART_ITEMS_REDUCER = "cart_items";
export const cartItemsAdaptor = createEntityAdapter();
export const initialCartItemState = cartItemsAdaptor.getInitialState(
  CART_ITEMS_INIT_STATE
);

export const cartItemsSlice = createSlice({
  name: CART_ITEMS_REDUCER,
  initialState: CART_ITEMS_INIT_STATE,
  reducers: {},
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
export const { selectAll, selectEntities } = cartItemsAdaptor.getInitialState();
export const getCartItemsState = (rootState) => rootState[CART_ITEMS_REDUCER];
export const selectAllCartItems = createSelector(getCartItemsState, selectAll);
export const selectCartItemsEntities = createSelector(
  getCartItemsState,
  selectEntities
);
