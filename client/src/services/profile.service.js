import { apiCall, API_URL } from "./api"

export const getprofileAPI = () => {
    const url = `${API_URL}/users/d73771a7-3bc9-4925-b1d5-c607eed46d5e/`;
    return apiCall(url, 'GET');
}

