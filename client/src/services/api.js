export const API_URL = process.env.REACT_APP_API_URL || 'http://api.giftiglobal.com/v1';

export const apiCall = async (url, method, data, headers) => {
    console.log('url ', url);
    const accessToken = localStorage.getItem('access_token');
    if(!accessToken) {
        localStorage.clear();
        sessionStorage.clear();
        window.location.href="/";
    }

    const requestHeaders = new Headers({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
        ...headers
    });

    const config = {
        method,
        headers = requestHeaders,
        body: data && JSON.stringify(data)
    }

    const result = await fetch(url, config);

    if(result.status === 404) {
        throw new Error('Not Found');
    }

    if(result.status === 403) {
        throw new Error('Unauthorized');
    }

    if(result.status === 401) {
        localStorage.clear();
        sessionStorage.clear();
        window.location.href = '/';
    }

    if(!result.ok) {
        const body = await result.json();
        return body;
    }

    return result.json();
}

