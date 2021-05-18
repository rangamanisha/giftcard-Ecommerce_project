import { apiCall, API_URL } from "./api";
import * as moment from "moment";

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

export const getConvertedAmountAPI = (
  amount,
  source_currency,
  dest_currency
) => {
  const url = `${API_URL}/giftcard_units/get_conversion_amount?amount=${amount}&source_currency=${source_currency}&dest_currency=${dest_currency}`;
  return apiCall(url, "GET");
};

export const getFixerConvertedAmount = async (
  amount,
  source_currency,
  dest_currency,
  date = moment().format("yyyy-MM-DD")
) => {
  const fixerURL = `${process.env.REACT_APP_FIXER_URL}`;
  const fixerAPIKey = `${process.env.REACT_APP_FIXER_API_KEY}`;
  const url = `${fixerURL}/convert?access_key=${fixerAPIKey}&from=${source_currency}&to=${dest_currency}&amount=${amount}`;
  const request = await fetch(url, { method: "GET" });
  const response = await request.json();
  if (response && response.success) {
    return {
      converted_amount:
        parseFloat(amount) *
        parseFloat(parseFloat(response?.info?.rate).toFixed(2)),
    };
  }
  return null;
};
