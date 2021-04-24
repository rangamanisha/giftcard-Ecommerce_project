import {apiCall } from './api';
export const API_URL = process.env.REACT_APP_API_URL_OLD;

export const termBrand = (brands) => {
    const {id, currency, program_id} = brands;
    const url = `${API_URL}/brands/${id}/terms?currency=${currency}`;
    return apiCall(url, 'GET', null, null, false);
}

export const product_description = (brands) => {
    const {id, currency, program_id} = brands;
    const url = `${API_URL}/brands/451/product_description?currency=${currency}&&id=${id}&&program_id=${program_id}`;
    return apiCall(url, 'GET', null, null, false);
}

export const featured_brands = (brands) => {
    const {program_id, currency} = brands;
    const url = `${API_URL}/brands/featured_brands?currency=${currency}&&program_id=${program_id}`;
    return apiCall(url, 'GET', null, null, false);
}

export const brands_by_category = (brands) => {
    const {program_id, currency,category_id} = brands;
    const url = `${API_URL}/brands/brands_by_category?category_id=${category_id}&&currency=${currency}&&program_id=${program_id}`;
    return apiCall(url, 'GET', null, null, false);
}

export const allBrand = (brands) => {
    const {currency, image_size, image_type, list_type, program_id } = brands;
    const url = `${API_URL}/brands?currency=${currency}&&image_size=${image_size}&&image_type=${image_type}&&list_type=${list_type}&&program_id=${program_id}`;
    return apiCall(url, 'GET', null, null, false);
}