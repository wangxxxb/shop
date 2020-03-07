export default class Service {
  constructor($axios, $configs) {
    // 挂载axios
    this.$axios = $axios;
    // 基础属性
    this.base_configs = $configs;
    this.createService(this.$axios, this.base_configs);
  }
  createService = (axios, configs) => {
    // 生成axios
    const service = axios.create(configs);
    // 设置Post put 默认 Content-Type
    service.defaults.headers.post["Content-Type"] =
      "application/json;charset=UTF-8";
    service.defaults.headers.put["Content-Type"] =
      "application/json;charset=UTF-8";

    // 设置跨域携带用户凭证
    service.defaults.withCredentials = true;
    // requst 拦截器
    service.interceptors.request.use(
      config => {
        return config;
      },
      error => {
        return Promise.reject(error);
      }
    );

    // response 拦截器
    service.interceptors.response.use(
      response => {
        return response;
      },
      async error => {
        let msg = "";
        // 断网 或者 请求超时 状态
        if (!error.response) {
          const message = error.hasOwnProperty("message")
            ? error.message
            : error.msg;
          if (message.includes("timeout")) {
            msg = "请求超时，请检查网络是否连接正常";
          } else if (message.includes("getCityCodeParam")) {
            msg = message;
          } else {
            msg = "请求失败，请检查网络是否已连接";
          }
        } else {
          msg = "请求失败，请稍后再试";
        }
        return Promise.reject({
          data: {
            success: false,
            data: null,
            msg
          }
        });
      }
    );
    this.service = service;
  };
}
