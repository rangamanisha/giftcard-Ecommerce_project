import { apiCall, API_URL } from "./api";
import * as moment from "moment";

export const cartItemsService = (cart_items) => {
  const url = `${API_URL}/cart_items`;
  return apiCall(url, "POST", cart_items);
};

export const fetchItemsByCartService = (cart_items) => {
  const { currency, currency_id } = cart_items;
  const url = `${API_URL}/cart_items/fetch_items_by_cart?currency=${currency}&&currency_id=${currency_id}`;
  return apiCall(url, "GET");
};

export const addRemoveQuantityService = (cart_items) => {
  const url = `${API_URL}/cart_items/add_or_remove_quantity/`;
  return apiCall(url, "PUT", cart_items);
};

export const cartTotalCountService = (cart_items) => {
  const { currency } = cart_items;
  const url = `${API_URL}/cart_items/cart_total_count?currency=${currency}`;
  return apiCall(url, "GET");
};

export const getBrandImageById = (id, currency) => {
  const url = `${API_URL}/brands/${id}/brand_images?currency=${currency}`;
  return apiCall(url, "GET");
};

export const getFixerConversionRateAPI = async (currency) => {
  const date = moment().format("yyyy-MM-DD");
  const fixerURL = `${process.env.REACT_APP_FIXER_URL}`;
  const fixerAPIKey = `${process.env.REACT_APP_FIXER_API_KEY}`;
  const url = `${fixerURL}/${date}?access_key=${fixerAPIKey}&base=AED&symbols=${currency}`;
  // const response = await apiCall(url, "GET");
  const request = await fetch(url, { method: "GET" });
  const response = await request.json();
  if (response && response.success) {
    return {
      code: 200,
      data: { currency_exchange_rate: response.rates[currency] },
    };
  }
  return { code: 200, data: { currency_exchange_rate: 1 } };
};
