import { createEntityAdapter, createSelector, createSlice } from '@reduxjs/toolkit';
import { AllorderAction,ProcessOrderAction,OrderDetailsAction,FailedOrderAction } from '../actions/orders.action';

export const ORDER_INITIAL_STATE = {
        // orderid: null,
        data:[],
        orders:[],
        orderid:"",
        order_status:""
}

export const ORDER__FEATURE_KEY = 'order';
export const OrderAdapter = createEntityAdapter();
export const intialOrderState = OrderAdapter.getInitialState(ORDER_INITIAL_STATE);

export const orderSlice = createSlice({
  name:  ORDER__FEATURE_KEY,
  initialState:  ORDER_INITIAL_STATE,
  reducers: {},
  extraReducers:  (builder) => {
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
    .addCase(AllorderAction.rejected, (state) => {
      state.code = true;
    })

    .addCase(OrderDetailsAction.pending, (state) => {
      state.code = true;
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


  }
});

export const orderReducer = orderSlice.reducer;
export const orderActions = orderSlice.actions;
export const { selectAll, selectEntities } = OrderAdapter.getSelectors();
export const getOrderState = (rootState) => rootState[ORDER__FEATURE_KEY];
export const selectAllOrders = createSelector(getOrderState, selectAll);
export const selectOrderEntities = createSelector(getOrderState, selectEntities);
