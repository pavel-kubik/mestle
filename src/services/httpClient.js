const DEFAULT_CONFIG = {
  method: 'GET',
  mode: 'cors',
  cache: 'no-cache',
  headers: {
    'Content-Type': 'application/json'
  }
};

const createHttpClient = () => {
  const request = async (url, config = {}) => {
    const finalConfig = {
      ...DEFAULT_CONFIG,
      ...config,
      headers: {
        ...DEFAULT_CONFIG.headers,
        ...config.headers
      }
    };

    if (finalConfig.body && typeof finalConfig.body === 'object') {
      finalConfig.body = JSON.stringify(finalConfig.body);
    }

    try {
      const response = await fetch(url, finalConfig);

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        return await response.json();
      }

      return response;
    } catch (error) {
      console.error('HTTP request failed:', error);
      throw error;
    }
  };

  const get = (url, config = {}) => {
    return request(url, { ...config, method: 'GET' });
  };

  const post = (url, data, config = {}) => {
    return request(url, {
      ...config,
      method: 'POST',
      body: data
    });
  };

  const put = (url, data, config = {}) => {
    return request(url, {
      ...config,
      method: 'PUT',
      body: data
    });
  };

  const deleteRequest = (url, config = {}) => {
    return request(url, { ...config, method: 'DELETE' });
  };

  const withAuth = (token) => {
    const authHeaders = {
      'x-access-token': token
    };

    return {
      get: (url, config = {}) =>
        get(url, {
          ...config,
          headers: { ...config.headers, ...authHeaders }
        }),
      post: (url, data, config = {}) =>
        post(url, data, {
          ...config,
          headers: { ...config.headers, ...authHeaders }
        }),
      put: (url, data, config = {}) =>
        put(url, data, {
          ...config,
          headers: { ...config.headers, ...authHeaders }
        }),
      delete: (url, config = {}) =>
        deleteRequest(url, {
          ...config,
          headers: { ...config.headers, ...authHeaders }
        })
    };
  };

  return {
    get,
    post,
    put,
    delete: deleteRequest,
    withAuth
  };
};

export const httpClient = createHttpClient();
