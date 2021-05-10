import { apiCall, API_URL } from "./api";
export const categorylistAPI = (categoryOptions) => {
  const { currency, program_id } = categoryOptions;
  const url = `${API_URL}/categories/get_categories?currency=${currency}&program_id=${program_id}`;
  return apiCall(url, "GET", null, null, false);
};

export const giftcard_units = () => {
  const url = `${API_URL}/giftcard_units`;
  return apiCall(url, "GET", null, null, false);
};
