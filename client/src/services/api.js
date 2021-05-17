export const API_URL = process.env.REACT_APP_API_URL;

export const apiCall = async (
  url,
  method,
  data,
  headers,
  isAuthenticatedReq = true
) => {
  const accessToken = localStorage.getItem("access_token");
  console.log('accessToken ', accessToken);
  if (isAuthenticatedReq && !accessToken) {
    localStorage.clear();
    sessionStorage.clear();
    window.location.href = "/";
  }

  const requestHeaders = isAuthenticatedReq
    ? new Headers({
      ...headers,
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`
    })
    : new Headers({ ...headers, "Content-Type": "application/json" });

  const config = {
    method,
    headers: requestHeaders,
    body: data && JSON.stringify(data),
  };

  const result = await fetch(url, config);

  if (result.status === 404) {
    throw new Error("Not Found");
  }

  if (result.status === 403 || result.status === 401) {
    localStorage.clear();
    sessionStorage.clear();
    window.location.href = "/";
  }

  if (!result.ok) {
    const body = await result.json();
    return body;
  }

  return result.json();
};
