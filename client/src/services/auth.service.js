import { apiCall, API_URL } from "./api"

export const loginAPI = (userData) => {
    const url = `${API_URL}/login/`;
    return apiCall(url, 'POST', userData, null, false);
}

export const signupAPI = (userData) => {
    const url = `${API_URL}/users/`;
    return apiCall(url, 'POST', userData, null, false);
}

export const resetpasswordAPI = (userData) => {
    const url = `${API_URL}/reset-forget-password/`;
    return apiCall(url, 'POST', userData, null, false);
}


export const forgotpasswordAPI = (userData) => {
    const url = `${API_URL}/send-forget-passwod-email/`;
    return apiCall(url, 'POST', userData, null, false);
}

