export const API_URL = process.env.REACT_APP_API_URL;

export const apiCall = async (
  url,
  method,
  data,
  headers,
  isAuthenticatedReq = true
) => {
  const accessToken = localStorage.getItem("access_token");
  const requestHeaders =
    accessToken !== null && accessToken !== undefined
      ? new Headers({
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
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

  if (!result.ok) {
    const body = await result.json();
    return body;
  }

  const response = await result.json();
  if (response.code === 401) {
    localStorage.clear();
    sessionStorage.clear();
  }

  return response;
};
