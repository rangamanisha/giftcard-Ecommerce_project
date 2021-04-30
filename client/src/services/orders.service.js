import {apiCall} from './api';
export const API_URL = process.env.REACT_APP_API_URL;

export const allOrderApiCall = (order) => {
    const url = `${API_URL}/orders?currency=${order.currency}&&image_size=${order.image_size}&&limit=${order.limit}&&offset=${order.offset}`;
    return apiCall(url, 'GET');
}

