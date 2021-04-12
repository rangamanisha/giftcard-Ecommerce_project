import { apiCall, API_URL } from "./api"

export const loginAPI = (userData) => {
    const url = `${API_URL}/login/`;
    return apiCall(url, 'POST', userData, null, false);
}

export const signupAPI = (userData) => {
    const url = `${API_URL}/accounts/registrations/signup`;
    return apiCall(url, 'POST', userData, null, false);
}


