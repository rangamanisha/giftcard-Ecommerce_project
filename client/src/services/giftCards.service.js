import { apiCall, API_URL } from "./api";

export const giftCardsUnitService = () => {
  const url = `${API_URL}/giftcard_units`;
  return apiCall(url, "GET", null, null, false);
};

export const getConversionRateService = (giftcardConversion) => {
  const { currency } = giftcardConversion;
  const url = `${API_URL}/giftcard_units/get_conversion_rate?currency=${currency}`;
  return apiCall(url, "GET", null, null, false);
};

export const getPaymentCurrencyService = () => {
  const url = `${API_URL}/giftcard_units/get_payment_currencies`;
  return apiCall(url, "GET", null, null, false);
};
