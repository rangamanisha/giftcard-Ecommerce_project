import { apiCall, API_URL } from "./api";

export const loginAPI = (userData) => {
  const url = `${API_URL}/accounts/sessions/signin`;
  return apiCall(url, "POST", userData, null, false);
};

export const signupAPI = (userData) => {
  const url = `${API_URL}/accounts/registrations/signup`;
  return apiCall(url, "POST", userData, null, false);
};

export const resetpasswordAPI = (userData) => {
  const url = `${API_URL}/accounts/passwords/update`;
  return apiCall(url, "PUT", userData, null, false);
};

export const forgotpasswordAPI = (userData) => {
  const url = `${API_URL}/accounts/passwords/new/`;
  return apiCall(url, "POST", userData, null, false);
};
