import { apiCall } from './api';

export const getCountriesAPI = () => {
  const url = `https://api-giftiglobal.meritincentives.com/v1/countries`;
  return apiCall(url, 'GET', null, null, false);
};
