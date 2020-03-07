const apiContext = require.context("./", false, /\.js$/);

let apis = {};
apiContext.keys().forEach(apiMap => {
  const api = apiContext(apiMap);
  /**
   * 兼容 import export 和 require module.export 两种规范
   */
  const ctrl = api.default || api;

  apis = {
    ...apis,
    ...ctrl
  };
});

export default apis;
