import { apiCall } from "./api";
export const API_URL = process.env.REACT_APP_API_URL;

export const idcSigninApiCall = (idcSignin) => {
  const url = `${API_URL}/accounts/sessions/idc_signin`;
  return apiCall(url, "POST", idcSignin, null, null, false);
};

export const idcTotalCreditApiCall =()=>{
  const url = `${API_URL}/user/idc_user_credits/total`;
  return apiCall(url,"GET");
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