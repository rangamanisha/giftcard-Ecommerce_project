// import { apiCall } from "./api";
import { apiCall1 } from "./idcApi";
export const API_URL = process.env.REACT_APP_API_URL;

export const idcSigninApiCall = (idcSignin) => {
  const url = `${API_URL}/accounts/sessions/idc_signin`;
  return apiCall1(url, "POST", idcSignin, null, null, null);
};
export const idcConvertedCurrencyApiCall = (data) => {
  const url = `${API_URL}/giftcard_units/get_conversion_amount?amount=${data.amount}&dest_currency=${data.dest}&margin=${data.margin}&source_currency=${data.source}`;
  return apiCall1(url, "GET");
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
  return apiCall1(url,"GET");
}

export const idcProfileApiCall =()=>{
  const url = `${API_URL}/user`;
  return apiCall1(url,"GET")
}

export const countryCodeApiCall =(country)=>{
  const url = `${API_URL}/countries/set_phone_attributes?country_name=${country}`;
  return apiCall1(url,"GET")
}
export const idcChangePasswordApiCall =(idc_user_data)=>{
    const url = `${API_URL}/accounts/passwords/change_password`;
    return apiCall1(url, "PUT", idc_user_data);

}
export const idcCountriesApiCall = () => {
  const url = `https://api-giftiglobal.meritincentives.com/v1/countries`;
  return apiCall1(url, "GET");
};
