import { apiCall, API_URL } from "./api"

export const getCountriesAPI = () => {
    const url = `${API_URL}/countries`;
    return apiCall(url, 'GET', null, null, false);
}