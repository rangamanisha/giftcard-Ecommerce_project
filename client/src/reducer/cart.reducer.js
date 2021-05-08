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
  errors: "",
  cart_items: [],
  gift_message: "",
  country_name: "",
  count: 1,
  lineItems: [],
  fetchedCartItems: [],
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
      const {item, index} = action.payload
      state.lineItems[index] = item
      // const lineItem = action.payload;
      // const index = map(
      //   state.lineItems, (item, index) => {
      //     console.log(item)
      //     if(item.id === lineItem.id && item.selectedDenomination === lineItem.selectedDenomination){
      //       return index
      //     }
          
      //   }
      // )
      // const { quantity } = lineItem;
    //   if (count < 1) {
    //     state.lineItems.splice(index, 1);
    //   } else state.lineItems[index] = lineItem;
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
