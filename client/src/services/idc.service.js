import { apiCall } from "./api";
export const API_URL = process.env.REACT_APP_API_URL;

export const idcSigninApiCall = (idcSignin) => {
  const url = `${API_URL}/accounts/sessions/idc_signin`;
  return apiCall(url, "POST", idcSignin, null, null, false);
};