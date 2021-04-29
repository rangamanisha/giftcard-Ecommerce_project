import {apiCall} from './api';
export const API_URL = process.env.REACT_APP_API_URL;

export const allOrderApiCall = (order) => {
    const url = `${API_URL}/orders?currency=${order.currency}&image_size=${order.image}&limit=10&offset=0`;
    return apiCall(url, 'GET', order, null, null, false);
}

