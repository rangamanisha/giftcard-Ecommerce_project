import { apiCall, API_URL } from './api';

export const getprofileAPI = () => {
  const url = `${API_URL}/user`;
  return apiCall(url, 'GET');
};
