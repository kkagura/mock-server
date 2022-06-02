import axios, { AxiosRequestConfig } from "axios";

const instance = axios.create();

class RequestError extends Error {
  constructor(message: string, public code: string) {
    super(message);
  }
}

export function request<T = any>(
  config: AxiosRequestConfig & { mock?: any }
): Promise<T> {
  //  如果传入了mock字段，则向mock服务发起请求
  if (config.mock /** 注：项目中实际使用时，需要添加环境判断 */) {
    config.data = config.mock;
    config.url = "/mock";
  }
  return instance.request<T>(config).then((response: any) => {
    const { code, data, message } = response.data;
    if (code == "0") {
      return data;
    }
    return Promise.reject(new RequestError(message, code));
  });
}
