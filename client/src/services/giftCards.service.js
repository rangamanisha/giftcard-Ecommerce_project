import { apiCall } from "./api";
export const API_URL = process.env.REACT_APP_API_URL;

export const giftCardsUnitService = (giftcards) => {
  const url = `${API_URL}/giftcard_units`;
  return apiCall(url, "GET", giftcards, null, null, false);
};

export const getConversionRateService = (giftcards) => {
  const { currency } = giftcards;
  const url = `${API_URL}/giftcard_units/get_conversion_rate?currency=${currency}`;
  return apiCall(url, "GET", giftcards, null, null, false);
};

export const getPaymentCurrencyService = (giftcards) => {
  const url = `${API_URL}/giftcard_units/get_payment_currencies`;
  return apiCall(url, "GET", giftcards, null, null, false);
};
