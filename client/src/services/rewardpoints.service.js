import { apiCall, API_URL } from "./api"

export const getRewardPointsAPI = () => {
    const url = `${API_URL}/user/mylist-credits/total`;
    return apiCall(url, 'GET');
}

export const getTransactionsAPI = () => {
    const url = `${API_URL}/user/mylist-credits`;
    return apiCall(url, 'GET');
}

export const getConvertAPI = (userData) => {
    const url = `${API_URL}/user/get_giftcard_converted_limit/?giftcard_number=${userData.giftcard_number}`;
    return apiCall(url, 'GET');
}

export const getRemainingAPI = (userData) => {
    const url = `${API_URL}/giftcards/${userData.giftcard_number}/balance`;
    return apiCall(url, 'GET');
}

export const getConvertCreditsAPI = (userData) => {
    const url = `${API_URL}/giftcards/add_mylist_card`;
    return apiCall(url, 'POST', userData);
}
