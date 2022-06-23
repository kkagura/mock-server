import axios, { AxiosRequestConfig } from "axios";
import mock from "mockjs";

const instance = axios.create();

class RequestError extends Error {
  constructor(message: string, public code: string) {
    super(message);
  }
}

export function request<T = any>(
  config: AxiosRequestConfig & { mock?: any }
): Promise<T> {
  // 如果传入了mock字段，则向mock服务发起请求
  // 注：项目中实际使用时，需要添加环境判断
  // if (config.mock) {
  //   // 修改method为post
  //   config.method = 'post;
  //   // 把mock参数作为请求体
  //   config.data = config.mock;
  //   // 修改配置里的url为mock服务地址
  //   config.url = "/mock";
  // }
  // 没有mock服务的时候
  if (config.mock) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mock.mock(config.mock));
      }, 200 * Math.random());
    });
  }
  return instance.request<T>(config).then((response: any) => {
    const { code, data, message } = response.data;
    if (code == "200") {
      return data;
    }
    return Promise.reject(new RequestError(message, code));
  });
}
