export const API_URL = process.env.REACT_APP_API_URL;

export const apiCall1 = async (
  url,
  method,
  data,
  headers,
  isAuthenticatedReq = true
) => {
  const idcAccessToken = localStorage.getItem("idc_access_token");

  if (isAuthenticatedReq && !idcAccessToken) {
    localStorage.removeItem("idc_access_token");
    sessionStorage.clear();
    // window.location.reload();
  }

  const requestHeaders = isAuthenticatedReq
    ? new Headers({
        "Content-Type": "application/json",
        Authorization: `Bearer ${idcAccessToken}`,
        ...headers,
      })
    : new Headers({ "Content-Type": "application/json", ...headers });

  const config = {
    method,
    headers: requestHeaders,
    body: data && JSON.stringify(data),
  };

  const result = await fetch(url, config);

  if (result.status === 404) {
    throw new Error("Not Found");
  }

  if (result.status === 403) {
    throw new Error("Unauthorized");
  }

  if (result.status === 401) {
    localStorage.clear();
    sessionStorage.clear();
    window.location.href = "/idc/signin";
  }

  if (!result.ok) {
    const body = await result.json();
    return body;
  }

  return result.json();
};
