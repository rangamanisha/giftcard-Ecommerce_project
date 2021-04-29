import { createEntityAdapter, createSelector, createSlice } from '@reduxjs/toolkit';
import { AllorderAction } from '../actions/orders.action';

export const ORDER_INITIAL_STATE = {

        orderid: null,
        order_status: null, 
        brand_name: null, 
        unit_name: null,
        giftcard_value: null,
        order_total: null, 
        total_amount: null, 
        order_total_aed: null, 
        payment_currency_amount: null,
        credit_debit_amount: null,
        payment_currency: null,
        payable_amount: null,
        credits_used: null,
        points_used: null,
        date: null,
        isgift: null
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
        state.total_credits = response.data.total_credits;
      }
    })
    .addCase(AllorderAction.rejected, (state) => {
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
