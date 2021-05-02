import {apiCall} from './api';
export const API_URL = process.env.REACT_APP_API_URL;

export const allOrderApiCall = (order) => {
    const url = `${API_URL}/orders?currency=${order.currency}&&image_size=${order.image_size}&&limit=${order.limit}&&offset=${order.offset}`;
    return apiCall(url, 'GET');
}

export const processOrderApiCall =(order)=>{
    const url = `${API_URL}/payments/process_order_after_redirect?order_id=${order.order_id}`;
    return apiCall(url, 'POST',order);
}

export const orderDetailsApiCall = (order) =>{
    const url = `${API_URL}/orders/${order.order_id}?image_size=${order.image_size}`;
    return apiCall(url,'GET');
}

export const failedOrderApiCall = (order) =>{
    const url = `${API_URL}/payments/failed_order_after_redirect ?order_id=${order.order_id}`;
    return apiCall(url,'POST',order)
}