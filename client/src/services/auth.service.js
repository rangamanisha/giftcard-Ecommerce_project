import { apiCall, API_URL } from "./api"

export const loginAPI = (userData) => {
    const url = `${API_URL}/login/`;
    return apiCall(url, 'POST', userData, null, false);
}

export const signupAPI = (userData) => {
    const url = `${API_URL}/users/`;
    return apiCall(url, 'POST', userData, null, false);
}


export const getUserByIdAPI = (id) => {
    const url = `${API_URL}/users/${id}/`;
    return apiCall(url, 'GET');
}
