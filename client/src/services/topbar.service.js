import { apiCall } from "./api"

export const getCountriesAPI = () => {
    const url = `${process.env.REACT_APP_API_URL_OLD}/countries`;
    return apiCall(url, 'GET', null, null, false);
}