import { apiCall, API_URL } from "./api";

export const contactUsAPI = (payload) => {
  const url = `${API_URL}/contact_us`;
  return apiCall(url, "POST", payload);
};
