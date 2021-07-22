import axios from 'axios';
import Config from './config';
import {
  responseInterceptor,
  errorInterceptor,
  requestInterceptor,
} from './Interceptor';

const mainAxios = axios.create({
  baseURL: Config.ttlUrl,
  timeout: Config.timeout,
  validateStatus: function (status) {
    return status === 200 || status === 404 || status === 201 || status === 500;
  },
});

// mainAxios.defaults.baseURL = '';
mainAxios.interceptors.response.use(responseInterceptor, errorInterceptor);
mainAxios.interceptors.request.use(requestInterceptor, errorInterceptor);

export const AcceptType = {
  json: 'application/json',
  jsonData: 'application/json; charset=UTF-8',
  formData: 'multipart/form-data',
  urlencode: 'application/x-www-form-urlencoded',
};

const defaultHeader = {
  Accept: AcceptType.json,
  'Content-Type': AcceptType.jsonData,
};

const formHeader = {
  Accept: AcceptType.formData,
  'Content-Type': AcceptType.formData,
};

export class apiClient {
  config;
  headers;

  constructor(token) {
    const authHeader =
      token && token.length > 0 ? {Authorization: 'Bearer ' + token} : null;
    console.log(authHeader);
    this.config = {};
    this.headers = {
      ...defaultHeader,
      ...authHeader,
    };
  }

  get = (url, body, option, baseUrl) => {
    option = option || {};
    const {headers, ...rest} = option;
    if (baseUrl) {
      mainAxios.defaults.baseURL = baseUrl;
    }
    console.log('==========');
    console.log(url);
    console.log(body);
    console.log(option);
    console.log(this.headers);
    return mainAxios.get(url, {
      ...this.config,
      params: {
        ...body,
      },
      headers: {
        ...this.headers,
        ...headers,
      },
      ...rest,
    });
  };

  post = (url, body, option, baseUrl) => {
    option = option || {};
    const {headers, ...rest} = option;
    if (baseUrl) {
      mainAxios.defaults.baseURL = baseUrl;
    }
    console.log(mainAxios.defaults.baseURL);
    return mainAxios.post(url, body, {
      ...this.config,
      headers: {
        ...this.headers,
        ...headers,
      },
      ...rest,
    });
  };

  postForm = (url, body, option) => {
    option = option || {};
    const {headers, ...rest} = option;
    return mainAxios.post(url, body, {
      ...this.config,
      headers: {
        ...this.headers,
        ...formHeader,
        ...headers,
      },
      ...rest,
    });
  };

  delete = (url, body, option) => {
    option = option || {};
    const {headers, ...rest} = option;
    return mainAxios.delete(url, {
      ...this.config,
      headers: {
        ...this.headers,
        ...headers,
      },
      data: {
        ...body,
      },
      ...rest,
    });
  };

  put = (url, body, option, baseUrl) => {
    option = option || {};
    const {headers, ...rest} = option;
    if (baseUrl) {
      mainAxios.defaults.baseURL = baseUrl;
    }
    return mainAxios.put(url, body, {
      ...this.config,
      headers: {
        ...this.headers,
        ...headers,
      },
      ...rest,
    });
  };
}
