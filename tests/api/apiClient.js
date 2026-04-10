class ApiClient {
  constructor(request, baseURL, defaultHeaders = {}) {
    this.request = request;
    this.baseURL = baseURL;
    this.headers = defaultHeaders;
  }

  async get(path, options = {}) {
    const url = this.baseURL + path;
    return this.request.get(url, {
      headers: this.headers,
      timeout: options.timeout,
      params: options.params,
    });
  }

  async post(path, data, options = {}) {
    const url = this.baseURL + path;
    return this.request.post(url, {
      headers: this.headers,
      data,
      timeout: options.timeout,
    });
  }

  async put(path, data, options = {}) {
    const url = this.baseURL + path;
    return this.request.put(url, {
      headers: this.headers,
      data,
      timeout: options.timeout,
    });
  }

  async delete(path, options = {}) {
    const url = this.baseURL + path;
    return this.request.delete(url, {
      headers: this.headers,
      timeout: options.timeout,
    });
  }
}

module.exports = ApiClient;
