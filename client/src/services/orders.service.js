import { apiCall } from "./api";
export const API_URL = process.env.REACT_APP_API_URL;

export const allOrderApiCall = (order) => {
  const url = `${API_URL}/orders?image_size=${order.image_size}&&limit=${order.limit}&&offset=${order.offset}`;
  return apiCall(url, "GET");
};

export const processOrderApiCall = (order) => {
  const url = `${API_URL}/payments/process_order_after_redirect?order_id=${order.order_id}`;
  return apiCall(url, "POST", {});
};

export const orderDetailsApiCall = (order) => {
  const url = `${API_URL}/orders/${order.order_id}?image_size=${order.image_size}`;
  return apiCall(url, "GET");
};

export const failedOrderApiCall = (order) => {
  const url = `${API_URL}/payments/failed_order_after_redirect ?order_id=${order.order_id}`;
  return apiCall(url, "POST", order);
};

export const createOrderAPI = (order) => {
  const url = `${API_URL}/orders`;
  return apiCall(url, "POST", order);
};

export const createOrderCheckoutAPI = (payload) => {
  const url = `${API_URL}/payments/create_checkout `;
  return apiCall(url, "POST", payload);
};

export const processOrderByGiftCardAPI = (orderId) => {
  const url = `${API_URL}/orders/process_order?order_id=${orderId}`;
  return apiCall(url, "GET");
};
