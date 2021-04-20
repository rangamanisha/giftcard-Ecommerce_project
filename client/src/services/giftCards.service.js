import {apiCall} from './api';
export const API_URL = process.env.REACT_APP_API_URL_OLD;

export const giftCardsUnitService = (giftcards) => {
    const url = `${API_URL}/giftcard_units`;
    return apiCall(url, 'GET', giftcards, null, null, false);
}