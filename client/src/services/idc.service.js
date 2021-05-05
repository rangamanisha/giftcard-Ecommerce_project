import { apiCall } from "./api";
import { apiCall1 } from "./idcApi";
export const API_URL = process.env.REACT_APP_API_URL;

export const idcSigninApiCall = (idcSignin) => {
  const url = `${API_URL}/accounts/sessions/idc_signin`;
  return apiCall1(url, "POST", idcSignin, null, null, null);
};

export const idcSingleOrderApiCall = (idcOrder) => {
  const url = `${API_URL}/idc_orders`;
  return apiCall1(url, "POST", idcOrder);
};


export const idcTotalCreditApiCall =()=>{
  const url = `${API_URL}/user/idc_user_credits/total`;
  return apiCall1(url,"GET");
}

export const idcVaritiesApiCall = () =>{
  const url = `${API_URL}/brands/idc_varities?program_id=1`;
  return apiCall(url,"GET");
}

export const idcProfileApiCall =()=>{
  const url = `${API_URL}/user`;
  return apiCall(url,"GET")
}

export const countryCodeApiCall =(country)=>{
  const url = `${API_URL}/countries/set_phone_attributes?country_name=${country}`;
  return apiCall(url,"GET")
}