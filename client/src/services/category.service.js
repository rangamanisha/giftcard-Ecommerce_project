import {apiCall } from './api';

export const API_URL = process.env.REACT_APP_API_URL_OLD;

export const categorylistAPI = (categoryOptions) => {
    const {currency, image_size, image_type, list_type, program_id
    } = categoryOptions;
    const url = `${API_URL}/categories/get_categories?currency=${currency}&program_id=${program_id}`;
    return apiCall(url, 'GET', null,null, false);
}

export const giftcard_units = () => {
    const url = `${API_URL}/giftcard_units`;
    return apiCall(url, 'GET', null,null, false);
}
