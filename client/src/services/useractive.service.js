import { apiCall, API_URL } from './api';

export const userActiveAPI = (userData) => {
  const url = `${API_URL}/accounts/confirmations/confirm_account`;
  return apiCall(url, 'PUT', userData, null, false);
};
