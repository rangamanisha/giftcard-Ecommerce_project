import {
  createEntityAdapter,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import {
  AllorderAction,
  OrderDetailsAction,
  createOrderAction,
  createOrderCheckoutAction,
  createGuestOrderAction,
} from "../actions/orders.action";

export const ORDER_INITIAL_STATE = {
  // orderid: null,
  data: [],
  orders: [],
  orderid: "",
  order_status: "",
  total: 0,
  error: null,
  created_order: null,
  loading: false,
  redirect_url: null,
  order_checkout_error: null,
  guest_payload: null,
};

export const ORDER__FEATURE_KEY = "order";
export const OrderAdapter = createEntityAdapter();
export const intialOrderState =
  OrderAdapter.getInitialState(ORDER_INITIAL_STATE);

export const orderSlice = createSlice({
  name: ORDER__FEATURE_KEY,
  initialState: ORDER_INITIAL_STATE,
  reducers: {
    clearState: (state) => {
      state.loading = false;
      state.created_order = null;
      state.redirect_url = null;
      state.order_checkout_error = null;
      state.error = null;
      state.guest_payload = null;
      state.data = [];
      state.orders = [];
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setGuestPayload: (state, action) => {
      state.guest_payload = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(AllorderAction.pending, (state) => {
        state.code = true;
      })
      .addCase(AllorderAction.fulfilled, (state, action) => {
        const response = action.payload;
        if (response.code === 200) {
          state.code = true;
          state.data = response.data.orders;
        }
      })
      .addCase(AllorderAction.rejected, (state) => {})
      .addCase(OrderDetailsAction.pending, (state) => {
        state.code = true;
        state.orders = null;
      })
      .addCase(OrderDetailsAction.fulfilled, (state, action) => {
        const response = action.payload;
        if (response.code === 200) {
          state.code = true;
          state.orders = response.data.order;
        }
      })
      .addCase(OrderDetailsAction.rejected, (state) => {
        state.code = true;
      })
      .addCase(createOrderAction.pending, (state) => {
        state.orderid = null;
        state.created_order = null;
        state.loading = true;
      })
      .addCase(createOrderAction.fulfilled, (state, action) => {
        const response = action.payload;
        state.loading = false;
        if (response.code === 200) {
          state.created_order = response.data.order;
        } else {
          state.error = response?.errors?.base?.join(",") || "Payment Failed";
        }
      })
      .addCase(createOrderAction.rejected, (state, action) => {
        state.error = action?.error?.message || "Order creation failed";
        state.loading = false;
        state.created_order = null;
      })
      .addCase(createOrderCheckoutAction.pending, (state, action) => {
        state.redirect_url = null;
        state.loading = true;
        state.order_checkout_error = null;
      })
      .addCase(createOrderCheckoutAction.fulfilled, (state, action) => {
        const { data, code } = action.payload;
        state.loading = false;
        if (code === 200) {
          state.redirect_url = data.order.redirect_url;
        } else {
          state.order_checkout_error =
            data?.errors || "Error in creating checkout";
        }
      })
      .addCase(createOrderCheckoutAction.rejected, (state, action) => {
        state.redirect_url = null;
        state.loading = false;
      })
      .addCase(createGuestOrderAction.pending, (state) => {
        state.orderid = null;
        state.created_order = null;
        state.loading = true;
      })
      .addCase(createGuestOrderAction.fulfilled, (state, action) => {
        const response = action.payload;
        state.loading = false;
        state.guest_payload = null;
        if (response.code === 200) {
          state.created_order = response.data.order;
        } else {
          state.error = response?.errors?.base?.join(",") || "Payment Failed";
        }
      })
      .addCase(createGuestOrderAction.rejected, (state, action) => {
        state.error = action?.error?.message || "Order creation failed";
        state.loading = false;
        state.created_order = null;
      });
  },
});

export const orderReducer = orderSlice.reducer;
export const orderActions = orderSlice.actions;
export const { selectAll, selectEntities } = OrderAdapter.getSelectors();
export const getOrderState = (rootState) => rootState[ORDER__FEATURE_KEY];
export const selectAllOrders = createSelector(getOrderState, selectAll);
export const selectOrderEntities = createSelector(
  getOrderState,
  selectEntities
);
